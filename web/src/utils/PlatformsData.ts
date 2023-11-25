import {
  BiFacebook,
  CibCodewars,
  CibStackoverflow,
  Fa6BrandsHashnode,
  MdiLinkedin,
  MdiTwitch,
  MdiTwitter,
  RiCodepenLine,
  RiGitlabFill,
  RiYoutubeFill,
  SkillIconsDevtoDark,
  TeenyiconsGithubSolid,
} from 'src/assets/Platforms'
import FrontendMentorIcon from 'src/assets/Platforms/FrontendMentorIcon'

const platforms = [
  { id: 'CODEWARS', label: 'Codewars', Icon: CibCodewars, color: '#8A1A50' },
  { id: 'DEVTO', label: 'Dev.to', Icon: SkillIconsDevtoDark, color: '#333333' },
  { id: 'FACEBOOK', label: 'Facebook', Icon: BiFacebook, color: '#2442AC' },
  {
    id: 'FREECODECAMP',
    label: 'freeCodeCamp',
    Icon: RiCodepenLine,
    color: '#302267',
  },
  {
    id: 'FRONTEND_MENTOR',
    label: 'Frontend Mentor',
    Icon: FrontendMentorIcon,
    color: '#FFFFFF',
  },
  {
    id: 'GITHUB',
    label: 'GitHub',
    Icon: TeenyiconsGithubSolid,
    color: '#1A1A1A',
  },
  { id: 'GITLAB', label: 'GitLab', Icon: RiGitlabFill, color: '#EB4925' },
  {
    id: 'HASHNODE',
    label: 'Hashnode',
    Icon: Fa6BrandsHashnode,
    color: '#0330D1',
  },
  { id: 'LINKEDIN', label: 'LinkedIn', Icon: MdiLinkedin, color: '#302267' },
  {
    id: 'STACK_OVERFLOW',
    label: 'Stack Overflow',
    Icon: CibStackoverflow,
    color: '#EC7100',
  },
  { id: 'TWITCH', label: 'Twitch', Icon: MdiTwitch, color: '#EE3FC8' },
  { id: 'TWITTER', label: 'Twitter', Icon: MdiTwitter, color: '#43B7E9' },
  { id: 'YOUTUBE', label: 'Youtube', Icon: RiYoutubeFill, color: '#EE3939' },
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
