/*
 * URBAN-FLOW TOOLBOX MOCKUP – COMIC VERSION OF THE VALDARENA USE CASE
 * ===================================================================
 * Content of the comic page (index.html#/comic). Plain JSON after "window.UF_COMIC =".
 * After saving, reload index.html (Cmd+Shift+R / Cmd+Option+R).
 *
 * cast[]      { id, name, role, look }   look: chiara | davide | rosa | marco (drawing used for the character)
 * chapters[]  { step (User Journey step, e.g. "UJ S1"), title, panels[] }
 * panels[]    { who: cast id or "narrator", scene: street | office | meeting | heat | map | cafe | van | phone | vote | sun,
 *               text }
 *
 * In "text", write a platform component as {{blockId:words shown}} – e.g. {{ldt:the 3D model}}.
 * The words are highlighted in the bubble and the block lights up on the platform map.
 * Block ids are the same as in architecture-tools.js. Only highlighted components light up.
 */
window.UF_COMIC = {
  "title": "Valdarena: a cooler, calmer Borgo",
  "intro": "A story in nine chapters about how a city uses the Urban-Flow Toolbox. Valdarena and its people are invented; the problems come from real Urban-Flow pilot cities.",
  "cast": [
    { "id": "chiara", "name": "Chiara", "role": "Mobility officer, City of Valdarena", "look": "chiara" },
    { "id": "davide", "name": "Davide", "role": "City IT team", "look": "davide" },
    { "id": "rosa", "name": "Rosa", "role": "Runs a café in the Borgo Antico", "look": "rosa" },
    { "id": "marco", "name": "Marco", "role": "Courier at VeloCargo", "look": "marco" }
  ],
  "chapters": [
    {
      "step": "Preparation", "title": "Valdarena joins the Toolbox",
      "panels": [
        { "who": "narrator", "scene": "street", "text": "Valdarena, 420,000 people. In the Borgo Antico, the old town, summers get hotter every year – and delivery vans fight for every metre of kerb." },
        { "who": "chiara", "scene": "office", "text": "Everyone has an opinion about the heat and the vans. I need facts. Let's try the Urban-Flow Toolbox." },
        { "who": "davide", "scene": "office", "text": "Done! Each department has an {{users:account}} with a {{authn:single login}}. I've plugged in the {{s_iot:street sensors and weather stations}} through the {{c_iot:sensor connector}}." },
        { "who": "davide", "scene": "map", "text": "All our open data are now in the {{datacat:data catalogue}}, and here is the Borgo in {{ldt:3D}}." }
      ]
    },
    {
      "step": "UJ S1", "title": "How hot? How crowded?",
      "panels": [
        { "who": "chiara", "scene": "office", "text": "From the {{kpicat:indicator catalogue}} I pick two things to measure: hours of heat stress, and deliveries made in double parking." },
        { "who": "narrator", "scene": "heat", "text": "{{clim_alert:Heat alerts}} maps the hottest streets. The {{kpim:indicator manager}} counts the double-parked vans. Both appear on the {{ldt:3D city model}}." },
        { "who": "chiara", "scene": "map", "text": "From noon to six it's an oven, and one delivery in three is in double parking. Now we know where we start from." }
      ]
    },
    {
      "step": "UJ S2", "title": "The Borgo speaks",
      "panels": [
        { "who": "narrator", "scene": "meeting", "text": "The City Living Lab meets. Residents, shopkeepers and couriers join the discussion on the {{epart:participation platform}}, with the {{ldt:3D model}} on the big screen." },
        { "who": "rosa", "scene": "cafe", "text": "In the afternoon my tables are in full sun. Nobody sits outside any more. We need shade!" },
        { "who": "marco", "scene": "van", "text": "And I need a free loading spot at seven in the morning – not a fight for one at noon." },
        { "who": "chiara", "scene": "meeting", "text": "The {{cat:catalogue of solutions}} shows what worked in other cities: loading windows, shade, greener streets." }
      ]
    },
    {
      "step": "UJ S3", "title": "Three possible futures",
      "panels": [
        { "who": "chiara", "scene": "office", "text": "Three options. A: loading windows from 7 to 11. B: A + a “heat mode” that keeps vans out of six streets on red-alert days. C: B + 40 parking spaces turned into shade." },
        { "who": "narrator", "scene": "map", "text": "The {{space_dyn:street-space manager}} tries out each option using the forecasts of {{clim_alert:heat alerts}}. VeloCargo lends its routes through the {{ds_mob:Mobility Data Space}} – for planning only." },
        { "who": "chiara", "scene": "map", "text": "Side by side in {{ldt:3D}}, with the expected results from the {{kpim:indicator manager}}, the choice is much clearer." }
      ]
    },
    {
      "step": "UJ S4", "title": "Valdarena chooses",
      "panels": [
        { "who": "narrator", "scene": "vote", "text": "The three options go back to the neighbourhood on the {{epart:participation platform}}. {{authz:Permissions}} make sure each resident votes only once." },
        { "who": "rosa", "scene": "cafe", "text": "I voted B – and we added shaded benches on two squares!" },
        { "who": "narrator", "scene": "vote", "text": "Option B wins with 58%. The result is shared with everyone through {{pub:open-data publishing}}." }
      ]
    },
    {
      "step": "UJ S5", "title": "Working together",
      "panels": [
        { "who": "chiara", "scene": "office", "text": "We buy the sensors and the service with clear targets from the {{kpim:indicator manager}} written into the contract." },
        { "who": "marco", "scene": "van", "text": "VeloCargo signed a {{x_con:data agreement}} with the city: they send us the live zones, we send back anonymous delivery data – all through the {{ds_mob:Mobility Data Space}}." }
      ]
    },
    {
      "step": "UJ S6", "title": "Heat mode goes live",
      "panels": [
        { "who": "narrator", "scene": "street", "text": "1 June. Every morning, from 7 to 11, the loading windows open." },
        { "who": "davide", "scene": "office", "text": "When {{clim_alert:heat alerts}} forecasts a red day, an {{rule:automatic rule}} tells the {{space_dyn:street-space manager}} to switch heat mode on." },
        { "who": "marco", "scene": "phone", "text": "And the new zones appear straight in our app – the {{c_it:systems connector}} sends them to the {{s_it:LEZ gates and courier apps}}." }
      ]
    },
    {
      "step": "UJ S7", "title": "The first heat wave",
      "panels": [
        { "who": "narrator", "scene": "sun", "text": "Mid-July. Two days ahead, {{clim_alert:heat alerts}} forecasts a red day. Heat mode switches on by itself." },
        { "who": "chiara", "scene": "phone", "text": "A {{alerts:real-time alert}} on my phone: heat mode is on. The local police know too." },
        { "who": "marco", "scene": "van", "text": "We changed our routes. No vans in the Borgo from noon to six." },
        { "who": "chiara", "scene": "map", "text": "On the {{dash:dashboard}}, fed live by the {{s_iot:street sensors}}: far fewer vans in the hottest hours." }
      ]
    },
    {
      "step": "UJ S8", "title": "A better summer – and beyond",
      "panels": [
        { "who": "narrator", "scene": "street", "text": "September. The {{kpim:indicator manager}} shows 34% less delivery congestion, and streets 1.2 °C cooler." },
        { "who": "rosa", "scene": "cafe", "text": "My tables are full again in the afternoon. Shade on two more squares, please!" },
        { "who": "chiara", "scene": "meeting", "text": "We try them out in {{ldt:3D}} and approve them with the neighbourhood on the {{epart:participation platform}}." },
        { "who": "davide", "scene": "office", "text": "And another city wants to copy us: we share our data and rules through the {{x_ex:data exchange}} of the {{ds_mob:Mobility Data Space}}." }
      ]
    }
  ]
}
