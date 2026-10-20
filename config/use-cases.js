/*
 * URBAN-FLOW TOOLBOX MOCKUP – USE-CASE STORIES
 * =============================================
 * Edit this file to change the stories shown on the "Use cases" page (#/story/<id>).
 * After saving, reload index.html in the browser (Cmd+Shift+R / Cmd+Option+R).
 *
 * The content after "window.UF_STORIES =" is plain JSON (double quotes, no trailing commas).
 *
 * stories[]   one entry per story
 *   id, city ("Florence" | "Valencia" | "Tampere"), title, subtitle, place, disclaimer
 *   cast[]      { "id", "name", "role", "portalRole" (Municipality | City Officer | Citizen | Stakeholder | Platform Operator) }
 *   chapters[]  in reading order
 *     when        e.g. "Week 2"          stage   short journey stage, e.g. "Measure"
 *     title       chapter title          who     cast id(s) of the main character(s)
 *     story       list of paragraphs     quote   { "who": cast id, "text": "..." } (optional)
 *     tools       list of { "block": <architecture block id>, "tool": "<tool name as in architecture-tools.js>", "does": "what it does in this moment" }
 *     flow        list of architecture block ids, in the order the action/data travels (drawn as a chain)
 *     metrics     list of { "label", "value" } (optional, illustrative)
 *   epilogue    { "title", "text", "metrics": [ { "label", "value" } ] }
 *
 * Block ids are the same as in architecture-tools.js (e.g. "epart", "kpim", "space_dyn", "c_iot", "x_pol", "ds_mob").
 */
window.UF_STORIES = {
  "stories": [
    {
      "id": "florence",
      "city": "Florence",
      "title": "Ten minutes to find a space",
      "subtitle": "How Florence used the Urban-Flow Toolbox to rethink parking in San Frediano – from the first complaint to a dataset shared with other cities.",
      "place": "San Frediano, Oltrarno – Florence",
      "disclaimer": "Illustrative scenario. People, places and numbers are fictional sample data used to show how the Toolbox components work together.",
      "cast": [
        { "id": "giulia", "name": "Giulia", "role": "Mobility officer, Comune di Firenze", "portalRole": "City Officer" },
        { "id": "luca", "name": "Luca", "role": "Platform operator, municipal IT", "portalRole": "Platform Operator" },
        { "id": "sara", "name": "Sara", "role": "Owns a bakery on Borgo San Frediano", "portalRole": "Stakeholder" },
        { "id": "paolo", "name": "Paolo", "role": "Resident, drives home after late shifts", "portalRole": "Citizen" },
        { "id": "elena", "name": "Elena", "role": "City councillor for mobility", "portalRole": "Municipality" }
      ],
      "chapters": [
        {
          "when": "Monday, 08:10",
          "stage": "Understand",
          "title": "Ten minutes to find a space",
          "who": ["giulia"],
          "story": [
            "Giulia's inbox opens with the same subject line as last week: parking in San Frediano. In three months the city has received 214 complaints – residents circling the block at night, delivery vans double-parked on Via del Leone, shopkeepers saying their customers simply give up.",
            "She opens the Urban-Flow Toolbox and signs in with her municipal account. One login: Keycloak recognises her as a City Officer of the Florence instance and shows only what her role may see. The home dashboard gives her the city-wide mobility picture – but nothing specific about this neighbourhood. The data she needs sit in three different systems."
          ],
          "quote": { "who": "giulia", "text": "Everyone has an opinion about parking. I need facts first." },
          "tools": [
            { "block": "authn", "tool": "Keycloak", "does": "Single sign-on with her municipal account." },
            { "block": "authz", "tool": "Keycloak", "does": "Applies the City Officer role for the Florence instance." },
            { "block": "dash", "tool": "Kentyou Eye – Urban hypervisor visualisation", "does": "City-wide mobility overview on the home dashboard." }
          ],
          "flow": ["users", "authn", "authz", "dash"],
          "metrics": [ { "label": "Complaints in 3 months", "value": "214" } ]
        },
        {
          "when": "Days 1–5",
          "stage": "Connect",
          "title": "Plugging in the city",
          "who": ["luca"],
          "story": [
            "Giulia calls Luca, who runs the platform. On Monday afternoon he connects the on-street parking sensors through the IoT connector: every bay now speaks NGSI-LD and updates the Orion-LD context broker in real time.",
            "On Tuesday he hooks up the parking-management platform (INES Cloud) and the traffic-management system through the IT-platform connector, and harvests resident-permit zones and the ZTL perimeter from Florence's open-data portal through Idra. The street geometry comes from the local GIS.",
            "Wednesday and Thursday go into harmonisation: Data Mashup and Chimera map everything onto common Smart Data Models, Airflow schedules a nightly refresh, Presto lets him query five years of history next to today's data, and GeoServer publishes a single layer with every parking bay. By Friday, San Frediano is one map."
          ],
          "quote": { "who": "luca", "text": "No new silos. We connected what the city already had." },
          "tools": [
            { "block": "c_iot", "tool": "FIWARE IoT Agents + FROST Server", "does": "Brings 640 bay sensors into the platform." },
            { "block": "etl", "tool": "Orion-LD Context Broker", "does": "Holds the live state of every bay as NGSI-LD entities." },
            { "block": "c_it", "tool": "TRUE Connector (IDS-based)", "does": "Connects INES Cloud and the traffic-management system." },
            { "block": "c_open", "tool": "Idra – Open Data Federation Platform", "does": "Harvests permit zones and the ZTL perimeter from the open-data portal." },
            { "block": "mashup", "tool": "Chimera", "does": "Maps the sources onto common data models." },
            { "block": "dmv", "tool": "Minimal Interoperability Mechanisms (MIMs Plus) – development version", "does": "Provides the Smart Data Models used for harmonisation." },
            { "block": "wf", "tool": "Apache Airflow", "does": "Schedules the nightly refresh." },
            { "block": "drf", "tool": "Presto", "does": "Federates historical and live data in one query." },
            { "block": "sdb", "tool": "PostgreSQL + PostGIS (MySQL where needed)", "does": "Stores the harmonised history." },
            { "block": "geo", "tool": "GeoServer", "does": "Publishes the parking-bay layer." }
          ],
          "flow": ["s_iot", "c_iot", "etl", "mashup", "sdb", "geo"],
          "metrics": [ { "label": "Sources connected", "value": "5" }, { "label": "Bays on the map", "value": "640" } ]
        },
        {
          "when": "Week 2",
          "stage": "Measure",
          "title": "What does “better” mean?",
          "who": ["giulia"],
          "story": [
            "Before discussing solutions, Giulia decides how success will be measured. In the KPI Catalogue she picks four indicators already used by other Urban-Flow cities: average occupancy per street segment, turnover, average time spent searching for a space, and CO₂ emitted by cars cruising for parking.",
            "In the KPI Manager she binds each indicator to the harmonised data and sets the baseline. The mobility hypervisor tells the story in one screen: 97% occupancy every evening, 11 minutes on average to find a space, and one delivery stop in three made in double parking."
          ],
          "quote": { "who": "giulia", "text": "Now we can tell whether a measure works – not just whether people like it." },
          "tools": [
            { "block": "kpicat", "tool": "KPI Catalogue (component of the KPI Manager)", "does": "Provides ready-made, comparable mobility indicators." },
            { "block": "kpim", "tool": "KPI Manager (Digital Enabler)", "does": "Computes the KPIs on live data and stores the baseline." },
            { "block": "space_dyn", "tool": "Kentyou Eye – Mobility Hypervisor (traffic management)", "does": "Shows occupancy and search-time patterns street by street." },
            { "block": "dash", "tool": "Kentyou Eye – Urban hypervisor visualisation", "does": "Puts the baseline on Giulia's dashboard." }
          ],
          "flow": ["kpicat", "kpim", "space_dyn", "dash"],
          "metrics": [ { "label": "Evening occupancy", "value": "97%" }, { "label": "Avg. search time", "value": "11 min" }, { "label": "Deliveries in double parking", "value": "1 in 3" } ]
        },
        {
          "when": "Weeks 3–6",
          "stage": "Co-create",
          "title": "Asking San Frediano",
          "who": ["sara", "paolo"],
          "story": [
            "Giulia opens a participatory process in the e-Participation module: “Better parking in San Frediano”. The page embeds the KPI baseline, the parking map from GeoServer and links to the datasets in the Data Catalogue, so everyone discusses the same facts.",
            "Sara signs in as a local business and pins a comment outside her bakery: her suppliers arrive at seven and never find the loading bay free. Paolo, a resident who comes home after midnight, asks for resident-only spaces in the evening. A cycling association asks for secure bike parking. In four weeks 312 people take part and leave 540 comments on the map."
          ],
          "quote": { "who": "sara", "text": "My suppliers arrive at seven. At seven there is never a free bay." },
          "tools": [
            { "block": "epart", "tool": "Decidim (Urban-Flow fork) and modules", "does": "Hosts the participatory process, map comments and proposals." },
            { "block": "epart", "tool": "EU-LDT-Participate", "does": "Embeds digital-twin views and KPIs in the debate." },
            { "block": "users", "tool": "Keycloak", "does": "Lets citizens and businesses join with their own accounts." },
            { "block": "geo", "tool": "GeoServer", "does": "Serves the parking map inside the process page." },
            { "block": "datacat", "tool": "Idra – Open Data Federation Platform", "does": "Links the open datasets behind the discussion." }
          ],
          "flow": ["users", "epart", "geo", "datacat"],
          "metrics": [ { "label": "Participants", "value": "312" }, { "label": "Map comments", "value": "540" } ]
        },
        {
          "when": "Week 7",
          "stage": "Simulate",
          "title": "Trying the future before building it",
          "who": ["giulia", "luca"],
          "story": [
            "From the Catalogue of Urban Regeneration Measures Giulia shortlists three options already tested elsewhere: (A) demand-based pricing; (B) timed loading bays from 7 to 11 that become resident spaces after 19:00; (C) converting 20 bays into outdoor seating and greenery.",
            "INES Cloud simulates occupancy and revenue for each option; the Urban Simulator estimates the effect on accessibility for the whole Oltrarno; the Local Digital Twin shows the street in 3D before and after. Giulia asks the geospatial assistant: “What happens on Via del Leone if we remove 20 bays?” The forecasts flow back into the KPI Manager next to the baseline."
          ],
          "quote": { "who": "luca", "text": "For the first time we can show the street before it changes." },
          "tools": [
            { "block": "cat", "tool": "Catalogue of Urban Regeneration Measures", "does": "Suggests proven measures with their expected impacts." },
            { "block": "space_dyn", "tool": "INES Cloud – Digital urban mobility & parking", "does": "Simulates pricing and occupancy per scenario." },
            { "block": "space_plan", "tool": "Urban Simulator", "does": "Estimates the effect on accessibility across the district." },
            { "block": "ldt", "tool": "Digital Twin Solution", "does": "3D comparison of the street before and after." },
            { "block": "agent", "tool": "SMART GEOSPATIAL CHAT", "does": "Answers “what if” questions in plain language." },
            { "block": "kpim", "tool": "KPI Manager (Digital Enabler)", "does": "Stores the forecast KPIs for each scenario." }
          ],
          "flow": ["cat", "space_dyn", "space_plan", "ldt", "kpim"],
          "metrics": [ { "label": "Scenarios simulated", "value": "3" }, { "label": "Forecast search time (B)", "value": "6 min" } ]
        },
        {
          "when": "Weeks 8–9",
          "stage": "Decide",
          "title": "The neighbourhood decides",
          "who": ["paolo", "elena"],
          "story": [
            "The three scenarios go back to the participatory process, each with its 3D view and forecast KPIs. Voting is open for two weeks; Keycloak makes sure each verified resident or business votes once.",
            "Scenario B wins with 61%, with an amendment from the debate: convert eight bays into bike parking and seating. Elena, the councillor for mobility, signs the decision and publishes the reasons on the same page where the discussion took place."
          ],
          "quote": { "who": "elena", "text": "For once, the decision came with numbers and with the neighbourhood behind it." },
          "tools": [
            { "block": "ldt", "tool": "Digital Twin Solution", "does": "Shows each scenario to voters." },
            { "block": "epart", "tool": "Decidim (Urban-Flow fork) and modules", "does": "Runs the vote and publishes the outcome." },
            { "block": "authz", "tool": "Keycloak", "does": "One verified participant, one vote." }
          ],
          "flow": ["ldt", "epart", "authz", "epart"],
          "metrics": [ { "label": "Votes cast", "value": "1,084" }, { "label": "Scenario B+", "value": "61%" } ]
        },
        {
          "when": "Month 3",
          "stage": "Implement",
          "title": "Switching it on",
          "who": ["giulia"],
          "story": [
            "On a Monday in spring the new rules go live. INES Cloud applies the timed loading bays and resident hours; the parking-bay layer in GeoServer is updated the same night.",
            "Paolo opens the MUV App on his way home and sees three free resident bays two streets away. Sara's supplier gets the loading window on his phone. The dashboard now shows the new layout next to the old one."
          ],
          "quote": { "who": "paolo", "text": "Last night I parked in two minutes. I checked twice." },
          "tools": [
            { "block": "space_dyn", "tool": "INES Cloud – Digital urban mobility & parking", "does": "Applies time windows, prices and resident hours." },
            { "block": "space_dyn", "tool": "MUV Cloud / MUV App – Multimodal mobility & LEZ tracking", "does": "Tells citizens where and when they can park." },
            { "block": "geo", "tool": "GeoServer", "does": "Publishes the updated bay layer." },
            { "block": "dash", "tool": "Kentyou Eye – Urban hypervisor visualisation", "does": "Compares the new layout with the old one." }
          ],
          "flow": ["space_dyn", "geo", "dash"],
          "metrics": [ { "label": "Timed loading bays", "value": "12" }, { "label": "Bays converted", "value": "8" } ]
        },
        {
          "when": "Months 3–6",
          "stage": "Monitor",
          "title": "The city talks back",
          "who": ["giulia"],
          "story": [
            "Giulia writes two rules in the Rule Manager: if a segment stays above 90% occupancy for 30 minutes, or a loading bay is used by a private car for more than 20 minutes, raise an alert. Alerts reach her and the local police in real time.",
            "Every quarter the KPI Manager compares results with the baseline and the forecast. After six months search time is down from 11 to 6 minutes and double parking by 40%. Giulia posts the figures back to the participatory process, so the people who voted can see what happened."
          ],
          "quote": { "who": "giulia", "text": "The people who asked for this can see whether it worked." },
          "tools": [
            { "block": "c_iot", "tool": "FIWARE IoT Agents + FROST Server", "does": "Keeps the sensor data flowing." },
            { "block": "rule", "tool": "Rule Manager (Digital Enabler)", "does": "Evaluates the occupancy and loading-bay rules." },
            { "block": "alerts", "tool": "Real-time Alerts on the Rule Manager", "does": "Notifies Giulia and the local police." },
            { "block": "kpim", "tool": "KPI Manager (Digital Enabler)", "does": "Quarterly check against baseline and forecast." },
            { "block": "dash", "tool": "Kentyou Eye – Urban hypervisor visualisation", "does": "Tracks the KPIs over time." },
            { "block": "epart", "tool": "Decidim (Urban-Flow fork) and modules", "does": "Reports results back to participants." }
          ],
          "flow": ["c_iot", "etl", "rule", "alerts", "kpim", "epart"],
          "metrics": [ { "label": "Avg. search time", "value": "11 → 6 min" }, { "label": "Double parking", "value": "−40%" } ]
        },
        {
          "when": "Month 6",
          "stage": "Share",
          "title": "Passing it on",
          "who": ["luca"],
          "story": [
            "Luca publishes an anonymised version of the occupancy data through Dataset Publishing, with DCAT-AP metadata so it can be found in European catalogues.",
            "Through the Data Spaces Connector he offers it to the Mobility Data Space with a clear policy: use for urban planning only, no re-identification. The contract is signed automatically, and a few weeks later the Valencia team uses it to calibrate their own adaptive public-space pilot."
          ],
          "quote": { "who": "luca", "text": "What we learned in San Frediano is now useful to Valencia and Tampere." },
          "tools": [
            { "block": "pub", "tool": "Idra – Open Data Federation Platform", "does": "Publishes the anonymised dataset." },
            { "block": "dcat", "tool": "Idra – Open Data Federation Platform", "does": "Describes it with DCAT-AP metadata." },
            { "block": "x_pol", "tool": "FIWARE Data Space Connector", "does": "Enforces the “planning only” usage policy." },
            { "block": "x_con", "tool": "FIWARE Data Space Connector", "does": "Negotiates the data contract." },
            { "block": "x_ex", "tool": "FIWARE Data Space Connector", "does": "Exchanges the data with the consumer." },
            { "block": "ds_mob", "tool": "", "does": "Where other cities discover and request the data." }
          ],
          "flow": ["pub", "dcat", "x_pol", "x_con", "x_ex", "ds_mob"],
          "metrics": [ { "label": "Cities reusing the data", "value": "2" } ]
        }
      ],
      "epilogue": {
        "title": "Six months later",
        "text": "One neighbourhood, one shared set of facts, a decision taken together and a dataset other cities can reuse. Nothing here required a new system: every step used a component of the Urban-Flow Toolbox.",
        "metrics": [
          { "label": "Avg. search time", "value": "−45%" },
          { "label": "Double parking", "value": "−40%" },
          { "label": "Participants", "value": "312" },
          { "label": "CO₂ from cruising", "value": "−18 t/yr" }
        ]
      }
    }
  ]
}
