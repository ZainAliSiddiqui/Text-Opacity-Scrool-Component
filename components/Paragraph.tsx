"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Paragraph({ paragraph }: { paragraph: string }) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start 0.9", "start 0.25"],
	});

	const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

	return (
		<>
			<h1 className="text-[30rem] text-white p-[40rem]">
				Paragraph Opacity Animation
			</h1>
			<motion.p
				ref={container}
				className="flex text-[60rem] leading-[1] p-[40rem] max-w-[1280rem] text-white flex-wrap"
				style={{ opacity }}>
				{paragraph}
			</motion.p>
		</>
	);
}
