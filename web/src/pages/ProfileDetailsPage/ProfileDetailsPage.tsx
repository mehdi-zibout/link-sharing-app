import { lazy, Suspense, useEffect } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import {
  UpdateProfileDetails,
  UpdateProfileDetailsVariables,
} from 'types/graphql'
import { z } from 'zod'

import { Controller, Form, SubmitHandler, useForm } from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'

import Card from 'src/components/Card/Card'
import CardWithButton from 'src/components/CardWithButton/CardWithButton'
import ImageUploadButton from 'src/components/ImageUpload/ImageUploadButton'
import Input from 'src/components/Input/Input'
import TitleWithDescription from 'src/components/TitleWithDescription/TitleWithDescription'
import {
  optimisticSession,
  useSession,
} from 'src/SessionContext/SessionContext'

const ImageUpload = lazy(() => import('src/components/ImageUpload/ImageUpload'))

const PROFILE_DETAILS_FORM_SCHEMA = z.object({
  firstName: z
    .string({ required_error: "Can't be empty" })
    .min(1, "Can't be empty"),
  lastName: z
    .string({ required_error: "Can't be empty" })
    .min(1, "Can't be empty"),
  publicEmail: z.string().email().optional().or(z.literal('')),
  profilePicture: z.string().url().optional().or(z.literal('')),
})

export type ProfileDetailsFormData = z.infer<typeof PROFILE_DETAILS_FORM_SCHEMA>

const PROFILE_DETAILS_MUTATION = gql`
  mutation UpdateProfileDetails($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
      firstName
      lastName
      profilePicture
      publicEmail
    }
  }
`

const ProfileDetailsPage = () => {
  const { firstName, lastName, profilePicture, publicEmail } = useSession()

  const formMethods = useForm<ProfileDetailsFormData>({
    defaultValues: {
      firstName: firstName ?? '',
      lastName: lastName ?? '',
      profilePicture: profilePicture ?? '',
      publicEmail: publicEmail ?? '',
    },

    resolver: zodResolver(PROFILE_DETAILS_FORM_SCHEMA),
  })

  const [mutate, { loading }] = useMutation<
    UpdateProfileDetails,
    UpdateProfileDetailsVariables
  >(PROFILE_DETAILS_MUTATION)

  const onSubmit: SubmitHandler<ProfileDetailsFormData> = async (data) => {
    mutate({ variables: { input: data } })
  }
  const optimisticDetails = formMethods.watch()
  useEffect(() => {
    optimisticSession({
      ...optimisticSession(),
      firstName: optimisticDetails.firstName,
      lastName: optimisticDetails.lastName,
      profilePicture: optimisticDetails.profilePicture,
      publicEmail: optimisticDetails.publicEmail,
    })
  }, [
    optimisticDetails.firstName,
    optimisticDetails.lastName,
    optimisticDetails.profilePicture,
    optimisticDetails.publicEmail,
  ])
  return (
    <>
      <MetaTags title="Profile Details" description="ProfileDetails page" />
      <Form formMethods={formMethods} onSubmit={onSubmit}>
        <CardWithButton
          buttonProps={{
            children: loading ? 'Saving...' : 'Save',
            disabled: loading || !formMethods.formState.isDirty,
          }}
        >
          <TitleWithDescription
            title="Profile Details"
            description="Add your details to create a personal touch to your profile."
          />
          <div className="h-[calc(100vh-354px)] overflow-y-auto md:h-[calc(100vh-408px)] xl:h-[calc(100vh-439px)]">
            <Card className="mb-6 mt-10">
              <h2 className="mb-4 text-bm text-grey">Profile picture</h2>
              <Controller
                control={formMethods.control}
                name="profilePicture"
                render={({ field }) => (
                  <Suspense
                    fallback={<ImageUploadButton imageUrl={field.value} />}
                  >
                    <ImageUpload
                      imageUrl={field.value}
                      onChange={(imageUrl) => field.onChange(imageUrl)}
                    />
                  </Suspense>
                )}
              />
              <p className="text-bs text-grey">
                Image must be below 1024x1024px. Use PNG or JPG format.
              </p>
            </Card>
            <Card className="space-y-3">
              <Input
                label="First Name*"
                placeholder="e.g. John"
                name="firstName"
              />
              <Input
                label="Last Name*"
                name="lastName"
                placeholder="e.g. Appleseed"
              />
              <Input
                label="Email"
                name="publicEmail"
                placeholder="e.g. email@example.com"
                type="email"
              />
            </Card>
          </div>
        </CardWithButton>
      </Form>
    </>
  )
}

export default ProfileDetailsPage
