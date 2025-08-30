# My Blog PWA 📱

A modern, responsive Progressive Web App (PWA) built with Next.js 15, TypeScript, and Tailwind CSS. Features offline functionality, post management, and a clean, user-friendly interface.

## ✨ Features

- 🚀 **Next.js 15** with App Router
- 📱 **Progressive Web App** with offline support
- 🎨 **Tailwind CSS** for modern styling
- 📝 **TypeScript** for type safety
- 📄 **Post Management** - Create, read, update posts
- 💬 **Comments System** - View comments on posts
- 📱 **Responsive Design** - Works on all devices
- 🔄 **Pagination** - Navigate through posts efficiently
- ⚡ **Fast Loading** - Optimized performance
- 🌐 **Offline Mode** - View cached content without internet

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **PWA**: @ducanh2912/next-pwa
- **HTTP Client**: Axios
- **State Management**: Zustand
- **Linting**: ESLint

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_BASE_URL=https://jsonplaceholder.typicode.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
my-blog/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable components
│   │   │   ├── PostCard.tsx     # Individual post card
│   │   │   └── Pagination.tsx   # Pagination component
│   │   ├── pages/
│   │   │   ├── posts/
│   │   │   │   └── [id]/
│   │   │   │       ├── page.tsx      # Post detail page
│   │   │   │       └── edit/
│   │   │   │           ├── page.tsx  # Edit post page
│   │   │   │           └── EditPostForm.tsx
│   │   │   ├── index.tsx        # Alternative home page
│   │   │   └── _offline.tsx     # Offline fallback
│   │   ├── utils/
│   │   │   └── api.ts           # API utility functions
│   │   ├── types/
│   │   │   └── blog.ts          # TypeScript interfaces
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Home page
├── public/
│   ├── icons/                   # PWA icons
│   ├── manifest.json           # PWA manifest
│   ├── offline.html           # Offline page
│   └── sw.js                  # Service worker (auto-generated)
├── next.config.js             # Next.js configuration
└── package.json
```

## 🚀 Build & Deploy

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

3. **Lint code**
   ```bash
   npm run lint
   ```

## 📱 PWA Features

### Installation
- Users can install the app on their devices
- Works on desktop and mobile browsers
- Appears in app drawer/home screen

### Offline Support
- Cached pages work without internet
- Automatic fallback to offline page
- Service worker handles caching strategy

### Performance
- Fast loading with optimized caching
- Background updates when online
- Efficient resource management

## 🔧 Configuration

### Environment Variables
- `NEXT_PUBLIC_API_BASE_URL`: API endpoint (default: JSONPlaceholder)

### PWA Settings
Configure PWA behavior in `next.config.js`:
- Caching strategies
- Offline fallbacks
- Service worker options

### Tailwind CSS
Customize styling in `tailwind.config.js`:
- Colors
- Typography
- Responsive breakpoints

## 📄 API Integration

The app uses JSONPlaceholder API by default, but you can integrate with any REST API:

### Endpoints Used:
- `GET /posts` - Fetch all posts with pagination
- `GET /posts/{id}` - Fetch single post
- `GET /posts/{id}/comments` - Fetch post comments
- `PUT /posts/{id}` - Update post (simulated)
- `POST /posts` - Create post (simulated)
- `DELETE /posts/{id}` - Delete post (simulated)

### API Functions (`src/app/utils/api.ts`):
- `fetchPosts(limit, page)` - Get paginated posts
- `fetchPost(id)` - Get single post
- `fetchComments(postId)` - Get post comments
- `createPost(payload)` - Create new post
- `updatePost(id, payload)` - Update existing post
- `deletePost(id)` - Delete post

## 🎨 Customization

### Styling
- Modify Tailwind classes in components
- Update theme colors in `tailwind.config.js`
- Customize PWA colors in `manifest.json`

### Features
- Add new post fields in TypeScript interfaces
- Extend API functions for additional endpoints
- Implement user authentication
- Add search functionality
- Include image upload capabilities

## 🔍 Testing PWA

1. **Build the app**: `npm run build && npm start`
2. **Open Chrome DevTools**
3. **Lighthouse Tab**: Run PWA audit
4. **Application Tab**: Check service worker and manifest
5. **Network Tab**: Test offline functionality

### PWA Checklist:
- ✅ HTTPS (required for PWA)
- ✅ Web App Manifest
- ✅ Service Worker
- ✅ Responsive Design
- ✅ Fast Loading
- ✅ Offline Functionality

## 🐛 Troubleshooting

### Common Issues:

1. **PWA not installing**
   - Check manifest.json syntax
   - Ensure HTTPS in production
   - Verify icon sizes and formats

2. **Offline mode not working**
   - Check service worker registration
   - Verify caching configuration
   - Test in incognito mode

3. **Build errors**
   - Check TypeScript types
   - Verify all imports
   - Run `npm run lint`

4. **API errors**
   - Check environment variables
   - Verify API endpoint accessibility
   - Check CORS settings

## 📈 Performance Tips

- Use Next.js Image component for optimized images
- Implement lazy loading for posts
- Add skeleton loading states
- Use React.memo for expensive components
- Optimize bundle size with dynamic imports

