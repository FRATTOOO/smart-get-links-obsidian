import { Notice, Plugin } from "obsidian";

export default class Linker extends Plugin {
	async onload() {
		this.registerEvent(
			this.app.workspace.on("file-menu", (menu, file) => {
				menu.addItem((item) => {
					item.setTitle("Get file link")
						.setIcon("brackets")
						.onClick(async () => {
							const encodedPath = encodeURI(file.path);
							const markdownLink = `[${file.basename}](${encodedPath})`;
							await navigator.clipboard.writeText(markdownLink);
							new Notice("Markdown link copied to clipboard!");
						});
				});
			})
		);

		
	}
}
