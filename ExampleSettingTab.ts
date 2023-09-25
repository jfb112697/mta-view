import ExamplePlugin from "./main";
import { App, PluginSettingTab, Setting } from "obsidian";

export class ExampleSettingTab extends PluginSettingTab {
  plugin: ExamplePlugin;

  constructor(app: App, plugin: ExamplePlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    let { containerEl } = this;

    containerEl.empty();

    new Setting(containerEl)
      .setName("MTA API Key")
      .setDesc("Obtain one here: ")
      .addText((text) =>
        text
          .setPlaceholder("MTA API Key")
          .setValue(this.plugin.settings.MTAKey)
          .onChange(async (value) => {
            this.plugin.settings.MTAKey = value;
            await this.plugin.saveSettings();
          })
      );
  }
}