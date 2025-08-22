import "./globals.css";
import "@/styles/base/_resets.scss";
import "@/styles/components/_header.scss";
import Player from "@/components/player";
import PlayerProvider from "./providers/player-provider";

export const metadata = {
    title: {
        template: "%s | iPlayMusic",
        default: "iPlayMusic",
    },
    description: "App for music lovers",
}
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<PlayerProvider>
				{children}
				<Player />
				</PlayerProvider>
			</body>
		</html>
	);
}