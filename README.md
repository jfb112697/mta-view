# mta-view

### Intro

---

mta-view adds the ability to see MTA subway departures from a selected subway station with realtime updates. Inserting the departure data into your notes gives you important information in planing your activities around train schedules.

I made this because I travel across the city for my job and when I first started using obsidian one of the first notes I made was around tasks that I have to do in a certain place and combined with the amazing Map View plugin I wanted to also see subway departures from my stop in my note.

So I made this.

### Mobile

---

Obsidian mobile never worked for me so this is completely untested on mobile.

### How to start

---

-   After installing and enabling the app, retrieve your [API token](https://api.mta.info/#/AccessKey) and enter it in the settings page (API tokens expire after 30 days of no use)
-   Use the Search for Subway Stations command in the command palette to find your subway stop
-   Selecting a stop will insert markdown at your cursor to show all departures for the selected stop

### Filtering

---

You can easily filter out lines from the stop by removing them from the array in the markdown.

You can also filter by direction by adding a N for uptown or S for downtown at the end of the stopId. To show only uptown departures

```subway
116 [1]
```

becomes

```subway
116N [1]
```

### Realtime Updates

---

The MTA GTF updates once every 30 seconds and the plugin is set to poll for updates every 30 seconds by default. The polling time can be changed in the settings to a different number of seconds.
