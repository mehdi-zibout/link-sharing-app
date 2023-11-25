import {
  BiFacebook,
  CibCodewars,
  CibStackoverflow,
  Fa6BrandsHashnode,
  Group272,
  MdiLinkedin,
  MdiTwitch,
  MdiTwitter,
  RiCodepenLine,
  RiGitlabFill,
  RiYoutubeFill,
  SkillIconsDevtoDark,
  TeenyiconsGithubSolid,
} from 'src/assets/Platforms'

const platforms = [
  { id: 'CODEWARS', label: 'Codewars', Icon: CibCodewars },
  { id: 'DEVTO', label: 'Dev.to', Icon: SkillIconsDevtoDark },
  { id: 'FACEBOOK', label: 'Facebook', Icon: BiFacebook },
  { id: 'FREECODECAMP', label: 'freeCodeCamp', Icon: Group272 },
  {
    id: 'FRONTEND_MENTOR',
    label: 'Frontend Mentor',
    Icon: RiCodepenLine,
  },
  { id: 'GITHUB', label: 'GitHub', Icon: TeenyiconsGithubSolid },
  { id: 'GITLAB', label: 'GitLab', Icon: RiGitlabFill },
  { id: 'HASHNODE', label: 'Hashnode', Icon: Fa6BrandsHashnode },
  { id: 'LINKEDIN', label: 'LinkedIn', Icon: MdiLinkedin },
  {
    id: 'STACK_OVERFLOW',
    label: 'Stack Overflow',
    Icon: CibStackoverflow,
  },
  { id: 'TWITCH', label: 'Twitch', Icon: MdiTwitch },
  { id: 'TWITTER', label: 'Twitter', Icon: MdiTwitter },
  { id: 'YOUTUBE', label: 'Youtube', Icon: RiYoutubeFill },
]

export const platformsId = [
  'CODEWARS',
  'DEVTO',
  'FACEBOOK',
  'FREECODECAMP',
  'FRONTEND_MENTOR',
  'GITHUB',
  'GITLAB',
  'HASHNODE',
  'LINKEDIN',
  'STACK_OVERFLOW',
  'TWITCH',
  'TWITTER',
  'YOUTUBE',
] as const
export default platforms
