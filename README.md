# React Native Photo Gallery

This project is a React Native photo gallery app that allows users to view photo thumbnails, select a photo to view its original size in a modal, add comments to photos, and perform CRUD operations on the comments. It is implemented using React Query, hooks, styled-components, TypeScript, and Redux Toolkit for data flow management.

## Features

- Display photo thumbnails in a single responsive screen.
- Enable users to select a photo to view it in a modal with its original size.
- Allow users to add comments to photos.
- Provide editing and deletion functionality for comments.
- Utilize React Query for efficient data fetching and caching.
- Implement component styling using styled-components.
- Utilize TypeScript for static type checking.
- Manage data flow using Redux Toolkit.

## Prerequisites

Before running the project, make sure you have the following prerequisites installed on your machine:

- Node.js
- Yarn (optional, can also use npm)

## Getting Started

1. Clone the repository:

```
git clone https://github.com/amanimzeh/galleryWithComments.git
```

2. Navigate to the project directory:

```
cd galleryWithComments
```

3. Install dependencies:

```
yarn install
```

4. Build and run the app on a simulator or device:

```
npx react-native run-android   # For Android
npx react-native run-ios       # For iOS
```

## Folder Structure

The project's folder structure is organized as follows:

```
├── src/
│   ├── components/           # Reusable components
│   ├── modals/               # interfaces
│   ├── redux/                # Redux store configuration
│   ├── screens/              # App screens
│   ├── services/             # API layer for data retrieval
│   └── utils/                # Utility functions
├── App.tsx                   # App entry point
└── index.js                  # Root component rendering
```

Feel free to explore the codebase to understand the implementation details of each feature.

## Conclusion

The React Native Photo Gallery app provides a responsive and interactive way for users to browse and interact with a collection of photos. It leverages modern libraries and tools such as React Query, styled-components, TypeScript, and Redux Toolkit to ensure efficient data fetching, component styling, type safety, and organized data flow.
