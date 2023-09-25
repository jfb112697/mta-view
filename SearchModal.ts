import { SubwayColors } from "colors";
import { SuggestModal, App, Notice, MarkdownView, EditorPosition } from "obsidian";
import { SubwayStation } from "stops";

export class SubwayStationSuggestModal extends SuggestModal<SubwayStation> {
    subwayStations: SubwayStation[];

    constructor(app: App, subwayStations: SubwayStation[]) {
        super(app);
        this.subwayStations = subwayStations;
    }

    getSuggestions(query: string): SubwayStation[] {
        return this.subwayStations.filter(station =>
            station.stopName.toLowerCase().includes(query.toLowerCase())
        );
    }

    renderSuggestion(station: SubwayStation, el: HTMLElement): void {
        console.log(station);
        const stationDiv = el.createDiv({ cls: 'train-info' });

        // Iterate over each line at the station
        station.lines.forEach(line => {
            // Get the color of the line from the SubwayColors map
            //@ts-ignore
            const color = SubwayColors[line];

            // Create the circle for the line
            const lineCircle = stationDiv.createDiv({ cls: 'train-circle' });
            lineCircle.style.backgroundColor = color;

            // Add the line number (or name) to the circle
            lineCircle.createEl('span', { cls: 'train-number', text: line });
        });

        // Add the station name
        stationDiv.createEl('div', { cls: 'train-details', text: station.stopName });
    }


    onChooseSuggestion(station: SubwayStation, evt: MouseEvent | KeyboardEvent) {
        const view = this.app.workspace.getActiveViewOfType(MarkdownView);
        const cursor = view?.editor.getCursor();
        const stationMarkdown: string = cursor ? `\`\`\`subway\n${station.stopId} [${station.lines.join(",")}]\n\`\`\`` : "";
        view?.editor.replaceRange(stationMarkdown, cursor as EditorPosition);
    }
}