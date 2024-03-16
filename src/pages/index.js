import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

import TypeIt from "typeit-react";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<div className={styles.container}>
			<TypeIt
				options={{
					strings: ["Welcome to my blog!"],
					speed: 65,
					waitUntilVisible: true,
				}}
				className={`${styles.customSpan}`}
			/>
			<div className={styles.buttons}>
				<Link className="button button--primary button--lg" to="/blog">
					Read Blog 📖
				</Link>
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<Layout
			// title={`Hello from ${siteConfig.title}`}
			description="This is Ramiza Al Farishi personal blog website."
		>
			<main>
				<HomepageHeader />
			</main>
		</Layout>
	);
}
