import * as fs from 'fs';

interface SubwayStation {
    stopName: string;
    lines: string[];
}

interface SubwayStationWithId extends SubwayStation {
    stopId: string;
}

function convertStationsToArray(stations: Record<string, SubwayStation>): SubwayStationWithId[] {
    return Object.keys(stations).map(stopId => {
        return { stopId, ...stations[stopId] };
    });
}

const subwayStations: Record<string, SubwayStation> = {
    // Your existing subwayStations object
};

const newArray = convertStationsToArray(subwayStations);

fs.writeFileSync('stops2.ts', `export const subwayStations = ${JSON.stringify(newArray, null, 2)};`);
