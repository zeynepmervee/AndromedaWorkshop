# Andromeda Marketplace

This is a **Next.js** project bootstrapped with **`create-next-app`**, providing a marketplace that allows users to **mint NFTs** and start auctions.

## Getting Started

To get started, follow these simple steps:

### 1. Install Dependencies

Run the following command to install the required dependencies for the project:

```bash
npm install
# or
yarn install
```
2. Run the Development Server
Once the dependencies are installed, start the development server by running:
```bash
npm run dev
# or
yarn dev
```
The app will be available at http://localhost:3000. Open it in your browser to see the result.

### 3. Start Editing the Page

You can start editing the page by modifying `pages/index.tsx`. The page will auto-update as you edit the file.

---

## Features

- **Mint NFTs**: Allows users to mint NFTs from a collection.
- **Start Auctions**: Users can start an auction for the minted NFTs, setting a minimum bid and auction duration.
- **User Interaction**: The app includes a button for minting NFTs and starting auctions in a seamless user flow.

---

## API Routes

You can access **API routes** on the following path:

- [API route](http://localhost:3000/api/hello)

This endpoint can be edited in `pages/api/hello.ts`. The `pages/api` directory is mapped to `/api/*`. Files here are treated as **API routes** instead of React pages.

---

## Project Structure

- **`pages/`**: Contains the React pages.
- **`components/`**: Where your reusable components reside.
- **`lib/`**: For helpers and backend logic.
- **`hooks/`**: Custom hooks, like the ones for minting and starting auctions.

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

You can also check out the [Next.js GitHub repository](https://github.com/vercel/next.js/) for contributions and feedback!

---

## Deployment

To deploy your app easily, use the **Vercel Platform** (from the creators of Next.js):

- [Deploy on Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

For more deployment options, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

---

## License

This project is licensed under the [MIT License](https://github.com/andromedaprotocol/andromeda-core/blob/development/LICENSE/LICENSE.md).

---

## Summary of Recent Changes

- **NFT Minting & Auction**: New functionality for minting NFTs and starting auctions has been added.
- **Mint and Auction Button**: A button that combines both minting and auction-starting processes in a seamless user flow.
- **Hooks & Modals**: Added hooks for handling minting and auction messages, as well as modals for user input.
