// Main site configurations from envs

type SiteConfig = {
   name: string
   url: string
   baseUrl: string
   description: string
   author: string
   xHandle?: string
   xUrl?: string
   githubUrl?: string
   faceBookUrl?: string
   linkedInUrl?: string
   instagramUsername?: string
   instagramUrl?: string
}

export const siteConfig: SiteConfig = {
   name: import.meta.env.PUBLIC_SITE_NAME,
   url: import.meta.env.PUBLIC_SITE_URL,
   baseUrl: import.meta.env.PUBLIC_SITE_BASE_URL || '/',
   description: import.meta.env.PUBLIC_SITE_DESCRIPTION,
   author: import.meta.env.PUBLIC_SITE_AUTHOR,
   xHandle: import.meta.env.PUBLIC_X_HANDLE,
   xUrl: import.meta.env.PUBLIC_X_URL,
   githubUrl: import.meta.env.PUBLIC_GITHUB_URL,
   faceBookUrl: import.meta.env.PUBLIC_FACEBOOK_URL,
   linkedInUrl: import.meta.env.PUBLIC_LINKEDIN_URL,
   instagramUsername: import.meta.env.PUBLIC_INSTAGRAM_USERNAME,
   instagramUrl: import.meta.env.PUBLIC_INSTAGRAM_URL,
}
