import Word from "./Word";
import Paragraph from "./Paragraph";
import Character from "./Character";
import { paragraph } from "@constants";

export default function Home() {
	return (
		<>
			<div className="h-screen" />
			<Paragraph paragraph={paragraph} />
			<div className="h-screen" />
			<Word paragraph={paragraph} />
			<div className="h-screen" />
			<Character paragraph={paragraph} />
			<div className="h-screen" />
		</>
	);
}
