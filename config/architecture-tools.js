/*
 * URBAN-FLOW TOOLBOX MOCKUP – CONTENT OF THE ARCHITECTURE CARDS
 * ==============================================================
 * Edit this file to change what appears when a block of the architecture is clicked
 * (and in the "Tools in this domain / Tools and partners" section of each module page).
 * After saving, reload index.html in the browser (Cmd+Shift+R / Cmd+Option+R).
 *
 * The content after "window.UF_CONFIG =" is plain JSON:
 *   - use double quotes, no trailing commas, no comments inside the JSON part;
 *   - if the file contains an error, the page shows a yellow "Configuration issues" box.
 *
 * "layers"  – the explanation shown when the "i" next to a layer title is clicked.
 *    title, purpose, whyItMatters, interactions [{ "layer": "<layer id>", "text": "..." }], sources [..]
 *    layer ids: ui, asf, kpi, dpo, dm, dc, src, dsc, ds, iam
 *
 * "blocks"  – one entry per architecture block, keyed by its id (do not rename the ids).
 *    title         label shown on the block in the architecture figure
 *    moduleName    (optional) title of the portal module page, if different from "title"
 *    layer/domain  informative only (the position of a block is fixed by the figure)
 *    reference     e.g. "D3.1 §4.3.13"
 *    summary       text shown under the title in the card panel
 *    toolsFrom     (optional) reuse the tools of another block (used by the Data Spaces Connector sub-blocks)
 *    video         (optional) demo video shown with the "Watch video" button next to "Open module":
 *                  { "src": "assets/videos/<file>.mp4", "title": "...", "label": "Watch video" }
 *    tools         list of tool cards:
 *        name          tool name (required)
 *        shortName     (optional, Marketplace tools) label shown on the button in the architecture figure and in the left menu
 *        order         (optional, Marketplace tools) position inside its domain, 1 = first
 *        partner       providing partner, e.g. "ENG", "TECNALIA" (optional)
 *        video         { "src", "title", "label" } demo video, shown as a "Watch video" button on the tool (optional)
 *        openSource    true for external tools, i.e. third-party tools not developed by a project partner;
 *                      shown as the "External tool" label (optional)
 *        integration   who integrates it, e.g. "ENG (T3.2 lead)" (optional)
 *        reference     e.g. "D3.1 §4.3.10.1" or "GA T5.3"
 *        description   one or two sentences
 *        cities        any of "Valencia", "Florence", "Tampere", or "All" (shows the flags)
 *        wp            e.g. "WP4" or "WP4, WP5"
 *        tasks         Grant Agreement task(s), e.g. "T3.4" or "T4.3, T4.4"
 *        repositories  list of { "label": "...", "url": "https://github.com/..." }
 *
 * "cityMatrix" – official allocation of tools to the pilot cities (from city-tool-matrix.xlsx).
 *    One entry per tool: tool, partner, primaryCity, group ("Marketplace" or "Cross-domain (mandatory)"),
 *    cities (list of "Florence", "Valencia", "Tampere"). The counters above the architecture use this list;
 *    the city highlight on the blocks uses the "cities" of the tool cards.
 *
 * "newMarketplaceBlocks" – extra blocks added to a Marketplace (Analyse · Simulate · Forecast) domain.
 *    id (unique, lowercase), domain (one of: "Climate Resilience / Adaptation", "Energy Communities",
 *    "Space & Infrastructures", "EV Charging Infrastructure", "CCAV Fleet"), title, moduleName, reference,
 *    partnerShort, summary, features [..], technology, connectedModules [block ids], roles [..], tools [..]
 */
window.UF_CONFIG = {
  "layers": {
    "ui": {
      "title": "User Interaction",
      "purpose": "The entry point of the Toolbox. It gives every stakeholder (policymakers, planners, operators, citizens) one coherent interface to explore data, interact with the Local Digital Twin and simulations, monitor KPIs and take part in decision-making.",
      "whyItMatters": "Complex analytical results only create value when non-experts can understand and act on them. This layer turns them into 3D views, dashboards, catalogues, conversational answers and participation processes, and it hosts the Admin module used to configure the platform.",
      "interactions": [
        {
          "layer": "asf",
          "text": "Shows simulation, forecast and optimisation results of the Marketplace tools (for example energy-community simulations on the 3D twin) and lets users launch them."
        },
        {
          "layer": "kpi",
          "text": "The KPI Catalogue and the dashboards read indicator definitions, values and alerts from the KPI Manager and Rule Manager."
        },
        {
          "layer": "dm",
          "text": "Consumes maps and layers published by GeoServer, datasets discovered through the Data Catalogue and documents indexed for the AI assistant."
        },
        {
          "layer": "iam",
          "text": "Every application uses Keycloak single sign-on; the user's roles decide which tools and data are visible."
        }
      ],
      "sources": [
        "D3.1 §4.1 and §4.3.1–4.3.7",
        "GA Part B §1.2.1.3",
        "GA T3.4, T3.5"
      ]
    },
    "asf": {
      "title": "Analyse · Simulate · Forecast (Marketplace)",
      "purpose": "The analytical engine of the Toolbox: advanced analytics, simulation, forecasting and multi-objective optimisation for climate resilience, energy communities, public space and infrastructure, EV charging and connected automated vehicles.",
      "whyItMatters": "It lets cities evaluate alternative scenarios and the impact of interventions before implementing them. It is a marketplace because the tools are contributed by different partners (mainly from WP4 and WP5) as interchangeable building blocks: each city adopts the ones that fit its pilot, in line with the modular EU LDT Toolbox approach.",
      "interactions": [
        {
          "layer": "dm",
          "text": "Reads harmonised and federated data (object storage, PostGIS, context broker, federators) and stores its outputs, for example raster layers served by GeoServer."
        },
        {
          "layer": "dpo",
          "text": "Long-running simulations, forecasts and data preparation are scheduled and chained by Workflow Management and Data Mashup."
        },
        {
          "layer": "kpi",
          "text": "Results are turned into KPIs in the KPI Manager; threshold violations (e.g. heat stress) trigger Rule Manager alerts."
        },
        {
          "layer": "ui",
          "text": "Outputs are visualised in the Local Digital Twin and dashboards and discussed in e-Participation."
        },
        {
          "layer": "dsc",
          "text": "Mobility and energy data products needed or produced by the tools can be exchanged through the Data Spaces Connector."
        }
      ],
      "sources": [
        "D3.1 §4.1 and §4.3.8–4.3.12",
        "GA Part B §1.2.1.3",
        "GA WP4 (T4.1–T4.4), WP5 (T5.1–T5.4), T3.6"
      ]
    },
    "kpi": {
      "title": "KPI Catalogue Management",
      "purpose": "Defines, calculates, monitors and governs the Key Performance Indicators used across the platform, and turns events and thresholds into automated reactions.",
      "whyItMatters": "KPIs link raw data, simulation outputs and policy objectives: they make interventions comparable across scenarios and cities and feed the Impact Assessment Framework (T2.4). Rules and real-time alerts close the loop between monitoring and action.",
      "interactions": [
        {
          "layer": "dm",
          "text": "The KPI Manager collects measurements from heterogeneous sources (REST APIs, SQL/NoSQL databases, IoT, SensorThings/FROST) and stores KPI history."
        },
        {
          "layer": "asf",
          "text": "Receives scenario KPIs from simulation tools; rules watch analytical outputs."
        },
        {
          "layer": "ui",
          "text": "Exposes indicators to the KPI Catalogue, dashboards, the Local Digital Twin and e-Participation."
        },
        {
          "layer": "dpo",
          "text": "Rule Manager actions (e-mail, webhook, Kafka, Telegram) can start downstream workflows and Data Mashup flows."
        }
      ],
      "sources": [
        "D3.1 §4.3.13–4.3.15",
        "GA Part B §1.2.1.3",
        "GA T3.2, T2.4"
      ]
    },
    "dpo": {
      "title": "Data Process Orchestration",
      "purpose": "Coordinates how data moves and is processed: scheduling and chaining pipelines, combining and harmonising sources, and publishing the resulting datasets.",
      "whyItMatters": "Ingestion, harmonisation, KPI calculation, simulations and metadata publication must run in the right order, reliably and reproducibly. Orchestration makes these chains automatic and traceable instead of manual.",
      "interactions": [
        {
          "layer": "dc",
          "text": "Triggers ingestion from open data, IoT, IT platforms and repositories."
        },
        {
          "layer": "dm",
          "text": "Writes harmonised data to object storage, databases and the context broker; Dataset Publishing (Idra) exposes it with DCAT-AP metadata."
        },
        {
          "layer": "asf",
          "text": "Runs simulations and analytical jobs in sequence and passes their outputs on."
        },
        {
          "layer": "kpi",
          "text": "Schedules KPI calculations; Rule Manager reactions can start workflows."
        },
        {
          "layer": "dsc",
          "text": "Published data products can be offered to European data spaces."
        }
      ],
      "sources": [
        "D3.1 §4.3.16–4.3.18",
        "GA Part B §1.2.1.3 (Data Process Support Tools)",
        "GA T3.2"
      ]
    },
    "dm": {
      "title": "Data Management",
      "purpose": "Stores, organises and governs the data of the Toolbox, both static and real-time: object storage, structured and geospatial databases, federation of repositories and portals, geospatial publication and metadata (DCAT-AP, INSPIRE) with a registry of data models.",
      "whyItMatters": "It provides one consistent, standards-based view of data that stays with its owners: federation (Presto, Idra) avoids centralising everything, and harmonised metadata and models make data discoverable and reusable across cities and tools. The ETL processes below it harmonise incoming data through open APIs such as OGC SensorThings and ETSI NGSI-LD.",
      "interactions": [
        {
          "layer": "dc",
          "text": "Receives data from the connectors through the ETL processes and Data Mashup flows."
        },
        {
          "layer": "asf",
          "text": "Serves harmonised data to analytics and simulations and stores their outputs."
        },
        {
          "layer": "kpi",
          "text": "Provides the measurements behind KPIs."
        },
        {
          "layer": "ui",
          "text": "GeoServer layers and the Data Catalogue feed the Digital Twin, dashboards and participation tools."
        },
        {
          "layer": "dsc",
          "text": "Metadata (DCAT-AP, mobilityDCAT-AP) describes the data products offered to data spaces."
        }
      ],
      "sources": [
        "D3.1 §4.3.19–4.3.27",
        "GA Part B §1.2.1.3",
        "GA T3.2"
      ]
    },
    "dc": {
      "title": "Data Connectors",
      "purpose": "Connects the Toolbox to the data sources of each city: open-data catalogues, IoT devices, municipal and third-party IT platforms and existing databases.",
      "whyItMatters": "Cities already own many heterogeneous systems. Connectors integrate them without replacing them, translate protocols and formats into common models (NGSI-LD, SensorThings, DCAT-AP) and respect the security and governance rules of each data owner.",
      "interactions": [
        {
          "layer": "src",
          "text": "Read from (and, for IT platforms, invoke services of) the external data sources."
        },
        {
          "layer": "dm",
          "text": "Deliver data to the ETL processes, the context broker and the federators."
        },
        {
          "layer": "dpo",
          "text": "Ingestion is triggered and monitored by Workflow Management and Data Mashup flows."
        },
        {
          "layer": "iam",
          "text": "Authentication and authorisation protect the connector endpoints."
        }
      ],
      "sources": [
        "D3.1 §4.3.28–4.3.31",
        "GA Part B §1.2.1.3",
        "GA T3.2"
      ]
    },
    "src": {
      "title": "Data Sources",
      "purpose": "The existing information systems of cities and stakeholders: traffic management and legacy platforms, open data portals, local GIS, sensors and IoT devices, base maps.",
      "whyItMatters": "They are not part of the Toolbox: they remain owned and operated by their organisations. The Toolbox reaches them through connectors and federation, so cities keep control of their data and preserve existing investments.",
      "interactions": [
        {
          "layer": "dc",
          "text": "Accessed exclusively through the Data Connectors layer."
        }
      ],
      "sources": [
        "D3.1 §4.1",
        "Architecture (D3.1 Figure 4)"
      ]
    },
    "dsc": {
      "title": "Data Spaces Connector",
      "purpose": "Lets an organisation participate in European data spaces as data provider, consumer or both, while keeping control over the conditions of use: publication of data-product offers, contract negotiation, policy evaluation, logging and controlled data exchange.",
      "whyItMatters": "Trusted, sovereign data sharing across organisations is a core objective of Urban-Flow (link to the European Mobility Data Space). The FIWARE Data Space Connector is the preferred implementation, with Simpl-Open as alternative; standards such as DCAT, ODRL and the Dataspace Protocol avoid lock-in to a single connector.",
      "interactions": [
        {
          "layer": "ds",
          "text": "Exchanges data products with the Mobility Data Space and other European data spaces."
        },
        {
          "layer": "dm",
          "text": "Offers datasets managed and described in Data Management; incoming data products are stored there."
        },
        {
          "layer": "dpo",
          "text": "Dataset Publishing prepares the metadata of the offers."
        },
        {
          "layer": "iam",
          "text": "Verifies organisational identities, credentials and participant attributes before access."
        }
      ],
      "sources": [
        "D3.1 §4.3.32",
        "GA Part B §1.2.1.3",
        "GA T3.3, T2.5"
      ]
    },
    "ds": {
      "title": "Data Spaces",
      "purpose": "The external, federated European data ecosystems the Toolbox connects to, first of all the European Mobility Data Space and the data space for smart and sustainable cities and communities (DS4SSCC).",
      "whyItMatters": "They give access to data beyond each city and allow Urban-Flow results to be shared under common rules, building on the blueprints of DSSC, deployEMDS and DS4SSCC.",
      "interactions": [
        {
          "layer": "dsc",
          "text": "Reached only through the Data Spaces Connector, under contracts and usage policies."
        }
      ],
      "sources": [
        "GA T3.3",
        "D3.1 §4.3.32"
      ]
    },
    "iam": {
      "title": "Identity & Access Manager",
      "purpose": "Manages users, roles and permissions for the whole platform: user management, authentication (OpenID Connect, OAuth 2.0, SAML 2.0, single sign-on, MFA) and role-based authorisation, implemented with Keycloak.",
      "whyItMatters": "Many stakeholder categories with different needs and data sensitivities use the same Toolbox. A central identity layer gives one login across all tools, consistent permissions per archetype and federation with existing institutional identity systems, aligned with the EU LDT Toolbox Integrated Environment.",
      "interactions": [
        {
          "layer": "ui",
          "text": "Single sign-on and role-based visibility for every user-facing tool (Decidim, dashboards, Digital Twin, AI agent)."
        },
        {
          "layer": "kpi",
          "text": "Rule Manager, KPI Manager and Data Mashup delegate authentication to Keycloak."
        },
        {
          "layer": "dc",
          "text": "Protects connector endpoints and service links."
        },
        {
          "layer": "dsc",
          "text": "Supports trusted identities for data-space participation."
        }
      ],
      "sources": [
        "D3.1 §4.3.33–4.3.35",
        "GA Part B §1.2.1.3"
      ]
    }
  },
  "blocks": {
    "admin": {
      "title": "Admin",
      "layer": "User Interaction",
      "reference": "D3.1 §4.3.1",
      "summary": "Single entry point for platform administrators to configure services, manage users, roles and permissions, monitor operations and set interoperability and data-sharing options across all Urban-Flow components.",
      "tools": [
        {
          "name": "Administration Interface (Admin)",
          "partner": "ENG",
          "integration": "T3.1 lead (assumed)",
          "reference": "D3.1 §4.3.1",
          "description": "Unified entry point for configuration, monitoring, users and roles, interoperability and data-sharing settings of all platform components.",
          "wp": "WP3",
          "tasks": "T3.1",
          "repositories": []
        }
      ]
    },
    "agent": {
      "title": "AI-based Agent",
      "layer": "User Interaction",
      "reference": "D3.1 §4.3.2",
      "summary": "Conversational assistant to query urban documentation and platform information in natural language. RAG mode answers from indexed policies, reports and deliverables with source citations; LLM mode supports open-ended analysis. It can also launch energy-community simulations.",
      "tools": [
        {
          "name": "Energy Advising RAG (AI-based Agent for Energy Communities)",
          "partner": "TECNALIA",
          "reference": "D3.1 §4.3.2",
          "description": "React chat over RAG (Qdrant) and a unified LLM proxy (LiteLLM), with document upload in Strapi and an energy-experiment launcher.",
          "cities": [
            "All"
          ],
          "wp": "WP5",
          "tasks": "T5.2",
          "repositories": [
            {
              "label": "LDT-AI-Agent (listed in D3.1)",
              "url": "https://github.com/Urban-Flow-Organization/LDT-AI-Agent"
            }
          ]
        },
        {
          "name": "SMART GEOSPATIAL CHAT",
          "partner": "TECNALIA",
          "reference": "GA §1.2.1.3",
          "description": "Generative-AI tools to consult and exploit information from the municipal GeoPortal, with heterogeneous data and complex queries.",
          "repositories": [
            {
              "label": "Urban-Flow tool catalogue",
              "url": "https://github.com/Urban-Flow-Organization/Catalogue"
            }
          ]
        }
      ]
    },
    "ldt": {
      "title": "Local Digital Twin",
      "layer": "User Interaction",
      "reference": "D3.1 §4.3.3",
      "summary": "Interactive 2D/3D geospatial environment to explore urban assets and domain layers, select entities and trigger simulations whose results are rendered on the map. Classified as a Predictive LDT (MIM8).",
      "tools": [
        {
          "name": "Local Digital Twin Viewer for Energy Communities Optimization",
          "partner": "TECNALIA",
          "reference": "D3.1 §4.3.3",
          "description": "CesiumJS 2D/3D viewer with energy-community layers, on-map 24 h simulations and an hour-by-hour time slider (Valencia pilot).",
          "cities": [
            "All"
          ],
          "wp": "WP3",
          "tasks": "T3.5",
          "repositories": [
            {
              "label": "LDT-Visualization-Tool (listed in D3.1)",
              "url": "https://github.com/Urban-Flow-Organization/LDT-Visualization-Tool"
            }
          ]
        },
        {
          "name": "Digital Twin Solution",
          "partner": "TECNALIA",
          "reference": "GA §1.2.1.3",
          "description": "City elements in layers (buildings, green areas, roads, points of interest), progressing from 2D/3D to immersive 3D for co-design processes.",
          "wp": "WP3",
          "tasks": "T3.5",
          "repositories": [
            {
              "label": "Urban-Flow tool catalogue",
              "url": "https://github.com/Urban-Flow-Organization/Catalogue"
            }
          ]
        }
      ]
    },
    "dash": {
      "title": "Dashboards & Data Visualisation",
      "layer": "User Interaction",
      "reference": "D3.1 §4.3.4",
      "summary": "Modular, domain-specific dashboards for monitoring KPIs, comparing scenarios and interpreting analytical outputs, with a deep link to the Digital Twin for spatial context.",
      "tools": [
        {
          "name": "Dashboards and Data Visualisation Viewer for Energy Communities Monitoring",
          "partner": "TECNALIA",
          "reference": "D3.1 §4.3.4",
          "description": "Energy, document and chat dashboards: REC simulations, beta optimisation, forecasting benchmarks, equity metrics and a deep link to the 3D twin.",
          "wp": "WP3",
          "tasks": "T3.5",
          "repositories": [
            {
              "label": "LDT-AI-Agent (listed in D3.1)",
              "url": "https://github.com/Urban-Flow-Organization/LDT-AI-Agent"
            },
            {
              "label": "LDT-Energy-Communities (listed in D3.1)",
              "url": "https://github.com/Urban-Flow-Organization/LDT-Energy-Communities"
            }
          ]
        },
        {
          "name": "GeoCacher",
          "partner": "ENG",
          "reference": "Urban-Flow catalogue · not in DoA (optional)",
          "description": "Backend and frontend for a geospatial dashboard: extracts and caches data from the Orion Context Broker, saves searches and uploads GeoJSON.",
          "wp": "WP3",
          "tasks": "T3.5",
          "repositories": [
            {
              "label": "GeoCacher frontend",
              "url": "https://github.com/Urban-Flow-Organization/GeoCacher-frontend"
            },
            {
              "label": "GeoCacher backend",
              "url": "https://github.com/Urban-Flow-Organization/GeoCacher-backend"
            }
          ],
          "cities": [
            "All"
          ],
          "video": {
            "src": "assets/videos/GeoCacher_Urban-Flow.mp4",
            "title": "GeoCacher – demo video",
            "label": "Watch video"
          }
        },
        {
          "name": "Kentyou Eye – Urban hypervisor visualisation",
          "partner": "Kentyou",
          "reference": "GA §1.2.1.3",
          "description": "Urban hypervisor to visualise urban data, provide forecasts and decision support for municipal actors, with dedicated analytics for the pilots.",
          "cities": [
            "All"
          ],
          "wp": "WP3, WP4, WP5",
          "tasks": "T3.5",
          "repositories": [
            {
              "label": "kentyou-eye (listed in the catalogue, not yet public)",
              "url": "https://github.com/Urban-Flow-Organization/kentyou-eye"
            }
          ]
        }
      ]
    },
    "cat": {
      "title": "Catalogue of Urban Regeneration Measures",
      "layer": "User Interaction",
      "reference": "D3.1 §4.3.5",
      "summary": "Structured repository of urban regeneration measures (mobility, energy, public-space and climate interventions) to explore, compare and reuse them in planning, simulation and co-creation. It extends the NBS Catalogue concept of URBREATH.",
      "tools": [
        {
          "name": "Catalogue of Urban Regeneration Measures",
          "partner": "ENG",
          "integration": "T3.2 lead",
          "reference": "D3.1 §4.3.5 · GA KR-8",
          "description": "Repository of mobility, energy, public-space and climate measures, extending the NBS Catalogue concept of the URBREATH project.",
          "wp": "WP3",
          "tasks": "T3.2",
          "repositories": [
            {
              "label": "URBREATH (reference project)",
              "url": "https://github.com/URBREATH"
            }
          ],
          "cities": [
            "All"
          ]
        }
      ]
    },
    "kpicat": {
      "title": "KPI Catalogue",
      "layer": "User Interaction",
      "reference": "D3.1 §4.3.6",
      "summary": "Structured view of the KPIs managed by the KPI Manager, so that indicators can be discovered, classified and reused by dashboards, the Digital Twin and participation processes.",
      "tools": [
        {
          "name": "KPI Catalogue (component of the KPI Manager)",
          "partner": "ENG",
          "reference": "D3.1 §4.3.6",
          "description": "Structured, searchable view of the indicators managed by the KPI Manager, reused by dashboards, the Digital Twin and e-Participation.",
          "cities": [
            "All"
          ],
          "wp": "WP3",
          "tasks": "T3.2",
          "repositories": [
            {
              "label": "KPI-Manager",
              "url": "https://github.com/Urban-Flow-Organization/KPI-Manager"
            }
          ]
        }
      ]
    },
    "epart": {
      "title": "e-Participation",
      "layer": "User Interaction",
      "reference": "D3.1 §4.3.7",
      "summary": "Participation and co-creation environment based on EU-LDT-Participate, which builds on Decidim: consultations, surveys, debates, proposals, voting and map-based feedback, connected to the Digital Twin, KPIs and the catalogue of measures.",
      "tools": [
        {
          "name": "EU-LDT-Participate",
          "partner": "EU LDT Toolbox",
          "integration": "ENG (T3.4 lead)",
          "reference": "D3.1 §4.3.7",
          "description": "Preferred e-participation component: Decidim-based environment adapted to Local Digital Twins, with consultations, surveys, debates, proposals, voting and co-creation.",
          "wp": "WP3",
          "tasks": "T3.4",
          "repositories": [
            {
              "label": "EU-LDT-Participate",
              "url": "https://code.europa.eu/ldt-toolbox/eu_ldt_Participate"
            }
          ]
        },
        {
          "name": "Decidim (Urban-Flow fork) and modules",
          "partner": "ENG",
          "openSource": true,
          "reference": "GA §1.2.1.3 · T3.4",
          "description": "Participatory-democracy framework integrated with the Digital Enabler; Urban-Flow modules for Keycloak SSO, Idra datasets, iframes, NBS stories and whiteboards.",
          "cities": [
            "All"
          ],
          "wp": "WP3",
          "tasks": "T3.4",
          "repositories": [
            {
              "label": "Decidim (Urban-Flow fork)",
              "url": "https://github.com/Urban-Flow-Organization/decidim"
            },
            {
              "label": "decidim-module-keycloak",
              "url": "https://github.com/Urban-Flow-Organization/decidim-module-keycloak"
            },
            {
              "label": "decidim-module-idra",
              "url": "https://github.com/Urban-Flow-Organization/decidim-module-idra"
            },
            {
              "label": "decidim-module-whiteboard",
              "url": "https://github.com/Urban-Flow-Organization/decidim-module-whiteboard"
            }
          ]
        },
        {
          "name": "Coney Toolkit",
          "partner": "CEFRIEL",
          "reference": "GA §1.2.1.3",
          "description": "Design, administration and analysis of multilingual conversational surveys, integrated into the user-engagement solutions.",
          "wp": "WP2",
          "tasks": "T2.3",
          "repositories": []
        }
      ],
      "video": {
        "src": "assets/videos/e-Participation_Decidim_Urban-Flow.mp4",
        "title": "e-Participation (Decidim) – demo video",
        "label": "Watch video"
      }
    },
    "clim_alert": {
      "title": "Real-time Alerts",
      "moduleName": "Climate & Heat Alerts",
      "layer": "Analyse · Simulate · Forecast (Marketplace)",
      "domain": "Climate Resilience / Adaptation",
      "reference": "D3.1 §4.3.8",
      "summary": "Monitoring of urban heat islands and thermal comfort that combines satellite imagery, IoT sensors and municipal data, with warnings when thresholds are exceeded.",
      "tools": [
        {
          "name": "UrbanHeatAtlas",
          "shortName": "Urban Heat Atlas",
          "order": 1,
          "partner": "TECNALIA",
          "reference": "D3.1 §4.3.8.2",
          "description": "Deep-learning model trained on microscale simulations that produces UTCI heat-stress maps at neighbourhood scale, exposed through a REST API.",
          "cities": [
            "All"
          ],
          "wp": "WP4",
          "tasks": "T4.1",
          "repositories": []
        },
        {
          "name": "EarthDataInsights (EDI)",
          "shortName": "EarthDataInsights (EDI)",
          "order": 3,
          "partner": "Latitudo 40",
          "reference": "D3.1 §4.3.8.3",
          "description": "Earth-observation indicators (LST, SUHI, vegetation, flood exposure, land use) with historical series, Stories, ESG reporting and the Ask EDI assistant.",
          "cities": [
            "All"
          ],
          "wp": "WP3, WP4",
          "tasks": "T3.5, T4.1",
          "repositories": []
        }
      ]
    },
    "thermal": {
      "title": "Thermal Comfort Routes",
      "layer": "Analyse · Simulate · Forecast (Marketplace)",
      "domain": "Climate Resilience / Adaptation",
      "reference": "GA T5.4",
      "summary": "Identifies optimal locations for climate refuges and comfortable itineraries based on thermal-comfort criteria and accessibility needs, including cycling, walking, public transport stops and school spaces.",
      "tools": [
        {
          "name": "Climate Shelter Router (THERMAL COMFORT)",
          "shortName": "Climate Shelter Router",
          "order": 2,
          "partner": "TECNALIA",
          "reference": "GA T5.4",
          "description": "Optimal location of climate refuges and comfortable itineraries based on thermal-comfort criteria and accessibility needs (cycling, walking, PT stops, schools).",
          "cities": [
            "Valencia",
            "Florence"
          ],
          "wp": "WP5",
          "tasks": "T5.4",
          "repositories": [
            {
              "label": "Urban-Flow tool catalogue",
              "url": "https://github.com/Urban-Flow-Organization/Catalogue"
            }
          ]
        }
      ]
    },
    "ec_rec": {
      "title": "EC Customer Recommendations",
      "layer": "Analyse · Simulate · Forecast (Marketplace)",
      "domain": "Energy Communities",
      "reference": "D3.1 §4.3.9.1",
      "summary": "Analyses energy-community simulation outputs and participant profiles to suggest actions. The first capability recommends EV charging locations and time windows from surplus PV energy.",
      "tools": [
        {
          "name": "EBENTO – Energy One-Stop Shop",
          "shortName": "EBENTO",
          "order": 3,
          "partner": "ETRA",
          "reference": "GA §1.1.4 · T5.2",
          "description": "One-stop shop for energy efficiency: information and services for homeowners and local entities on energy habits, bills, renovation and solar self-consumption.",
          "cities": [
            "Valencia"
          ],
          "wp": "WP5",
          "tasks": "T5.2",
          "repositories": [
            {
              "label": "EBENTO project (website)",
              "url": "https://ebentoproject.eu/"
            }
          ]
        },
        {
          "name": "Energy Advising RAG",
          "shortName": "Energy Advising RAG",
          "order": 2,
          "partner": "TECNALIA",
          "reference": "D3.1 §4.3.2 · GA T5.2",
          "description": "AI assistant (RAG over energy documentation) that guides citizens and entities in the one-stop shop and launches energy-community simulations.",
          "cities": [
            "Valencia"
          ],
          "wp": "WP5",
          "tasks": "T5.2",
          "repositories": [
            {
              "label": "LDT-AI-Agent (listed in D3.1)",
              "url": "https://github.com/Urban-Flow-Organization/LDT-AI-Agent"
            }
          ]
        }
      ]
    },
    "ec_dist": {
      "title": "EC Energy Distribution Planning & Optimisation",
      "layer": "Analyse · Simulate · Forecast (Marketplace)",
      "domain": "Energy Communities",
      "reference": "D3.1 §4.3.9",
      "summary": "Optimises how shared PV energy is allocated hour by hour among community members: LSTM forecasting, battery control, MILP optimisation of grid-import cost and a social-fairness adjustment. Kentyou City Energy Management adds consumption monitoring of municipal buildings.",
      "tools": [
        {
          "name": "Collective DER optimizing tool",
          "shortName": "Collective DER optimisation tool",
          "order": 1,
          "partner": "TECNALIA",
          "reference": "D3.1 §4.3.9.1",
          "description": "LSTM forecasting, community battery control, MILP beta-coefficient allocation and social-fairness adjustment; annual multi-strategy planning.",
          "cities": [
            "All"
          ],
          "wp": "WP5",
          "tasks": "T5.2",
          "repositories": [
            {
              "label": "LDT-Energy-Communities (listed in D3.1)",
              "url": "https://github.com/Urban-Flow-Organization/LDT-Energy-Communities"
            }
          ]
        }
      ]
    },
    "space_plan": {
      "title": "Space Use Planning",
      "layer": "Analyse · Simulate · Forecast (Marketplace)",
      "domain": "Space & Infrastructures",
      "reference": "D3.1 §4.3.10",
      "summary": "Planning analytics for public space and mobility: accessibility indices and isochrones for the 15-minute city (UNEED), and environmental evaluation of design scenarios through synthetic satellite imagery (Urban Simulator) compared with the observed EarthDataInsights baseline.",
      "tools": [
        {
          "name": "U-NEED – Mobility Accessibility & Multimodal Planning Analytics",
          "shortName": "U-NEED",
          "order": 1,
          "partner": "ETRA",
          "reference": "D3.1 §4.3.10.2",
          "description": "Big-data analytics for public transport: accessibility index, isochrones, 15-minute city and multimodal analysis under climate disruptions.",
          "cities": [
            "All"
          ],
          "wp": "WP4",
          "tasks": "T4.1",
          "repositories": [
            {
              "label": "U-NEED",
              "url": "https://github.com/jsuarez-etraid/U-Need"
            }
          ]
        },
        {
          "name": "Urban Simulator",
          "shortName": "Urban Simulator",
          "order": 6,
          "partner": "Latitudo 40",
          "reference": "D3.1 §4.3.10.5",
          "description": "Evaluates design scenarios through GAN-generated synthetic satellite imagery, scored with the Microclimatic Performance Index against the observed baseline.",
          "cities": [
            "All"
          ],
          "wp": "WP3, WP4",
          "tasks": "T3.5, T4.1",
          "repositories": []
        },
        {
          "name": "EPISODE-CityChem & BenMAP-CE (air quality / HIA)",
          "shortName": "EPISODE",
          "order": 4,
          "partner": "PV",
          "reference": "GA T3.6 · §1.2.1.3",
          "description": "Open-source urban air-quality model for high-resolution pollutant exposure (EPISODE-CityChem) combined with health-impact quantification through exposure-response functions (BenMAP-CE).",
          "cities": [
            "All"
          ],
          "wp": "WP3",
          "tasks": "T3.6",
          "repositories": [
            {
              "label": "Urban-Flow tool catalogue",
              "url": "https://github.com/Urban-Flow-Organization/Catalogue"
            }
          ]
        }
      ]
    },
    "space_dyn": {
      "title": "Dynamic Space Management",
      "layer": "Analyse · Simulate · Forecast (Marketplace)",
      "domain": "Space & Infrastructures",
      "reference": "D3.1 §4.3.10",
      "summary": "Operational management of curb-side and urban space: adaptive time-slot allocation with temporary overrides (PARCAR), performance-based dynamic parking pricing and alerts (INES Cloud and MUV App), and city-scale traffic monitoring (Kentyou Mobility Hypervisor).",
      "tools": [
        {
          "name": "PARCAR – Adaptive Public Space Management",
          "shortName": "PARCAR",
          "order": 5,
          "partner": "ETRA",
          "reference": "D3.1 §4.3.10.1",
          "description": "Dynamic curb-side allocation for logistics, residents and general use, with daily time slots and temporary overrides for events.",
          "cities": [
            "Valencia",
            "Florence"
          ],
          "wp": "WP4",
          "tasks": "T4.3",
          "repositories": [
            {
              "label": "PARCAR",
              "url": "https://github.com/Urban-Flow-Organization/Parcar"
            }
          ]
        },
        {
          "name": "INES Cloud – Digital urban mobility & parking",
          "shortName": "INES CLOUD",
          "order": 2,
          "partner": "Municipia",
          "reference": "D3.1 §4.3.10.4",
          "description": "Parking supervision extended with performance-based dynamic pricing, scenario analysis, configurable alerts and access regulation (UVAR, permits).",
          "cities": [
            "Florence",
            "Tampere"
          ],
          "wp": "WP4",
          "tasks": "T4.3, T4.4",
          "repositories": [
            {
              "label": "INES Cloud",
              "url": "https://github.com/Urban-Flow-Organization/Municipia-INESCloud"
            }
          ]
        },
        {
          "name": "MUV Cloud / MUV App – Multimodal mobility & LEZ tracking",
          "shortName": "MUV CLOUD",
          "order": 3,
          "partner": "Municipia",
          "reference": "D3.1 §4.3.10.4",
          "description": "MaaS app and operator platform: trip planning, ticketing and parking payments, dynamic prices communicated to citizens, vehicle tracking in the LEZ.",
          "cities": [
            "Florence"
          ],
          "wp": "WP4",
          "tasks": "T4.4",
          "repositories": [
            {
              "label": "MUV App",
              "url": "https://github.com/Urban-Flow-Organization/Municipia-MUVApp"
            }
          ]
        },
        {
          "name": "Kentyou Eye – Mobility Hypervisor (traffic management)",
          "shortName": "Kentyou Eye",
          "order": 7,
          "partner": "Kentyou",
          "reference": "D3.1 §4.3.10.3",
          "description": "City-scale traffic monitoring, anomaly detection, origin-destination analytics and decision support.",
          "cities": [
            "All"
          ],
          "wp": "WP3, WP4, WP5",
          "tasks": "T4.4",
          "repositories": [
            {
              "label": "kentyou-eye (listed in the catalogue, not yet public)",
              "url": "https://github.com/Urban-Flow-Organization/kentyou-eye"
            }
          ]
        }
      ]
    },
    "ev_cp": {
      "title": "EV CP Management",
      "moduleName": "EV Charging Point Management",
      "layer": "Analyse · Simulate · Forecast (Marketplace)",
      "domain": "EV Charging Infrastructure",
      "reference": "D3.1 §4.3.11.1",
      "summary": "Electra optimises e-bus depot charging: linear optimisation of charging curves against energy cost, number of chargers, number of buses and schedules, with real-time battery state and remaining-time forecasts.",
      "tools": [
        {
          "name": "Electra – Smart EV Fleet Charging Optimisation",
          "shortName": "ELECTRA",
          "order": 1,
          "partner": "ETRA",
          "reference": "D3.1 §4.3.11.1",
          "description": "Linear optimisation of e-bus depot charging against energy cost, chargers and schedules, with real-time battery state and forecasts.",
          "cities": [
            "All"
          ],
          "wp": "WP4, WP5",
          "tasks": "T4.2, T5.3",
          "repositories": [
            {
              "label": "Electra",
              "url": "https://github.com/Urban-Flow-Organization/Electra"
            }
          ]
        },
        {
          "name": "TATEBE EV charging testbed",
          "shortName": "TATEBE",
          "order": 2,
          "partner": "VTT",
          "reference": "GA T5.3",
          "description": "Tampere testbed for innovative charging technologies, V2X interoperability and user-experience evaluation of automated-vehicle charging.",
          "cities": [
            "Tampere"
          ],
          "wp": "WP5",
          "tasks": "T5.3",
          "repositories": []
        }
      ]
    },
    "ccav_op": {
      "title": "Operational Optimization",
      "moduleName": "CCAV Operational Optimisation",
      "layer": "Analyse · Simulate · Forecast (Marketplace)",
      "domain": "CCAV Fleet",
      "reference": "D3.1 §4.3.12",
      "summary": "Remote Control Center supervising Level-4 automated shuttles: fleet monitoring, remote assistance, incident and safety management. Use case: the shuttle between Hervantajärvi tram stop and Lintuhytti in Tampere.",
      "tools": [
        {
          "name": "Remote Control Center (RCC)",
          "shortName": "Remote Control Center (AV)",
          "order": 1,
          "partner": "Remoted",
          "reference": "D3.1 §4.3.12",
          "description": "Supervision and remote assistance of Level-4 automated shuttles; use case between Hervantajärvi and Lintuhytti in Tampere.",
          "cities": [
            "Tampere"
          ],
          "wp": "WP6",
          "tasks": "T5.1, T6.9",
          "repositories": []
        },
        {
          "name": "Tampere.Finland App Integration",
          "shortName": "Tampere.Finland App Integration",
          "order": 2,
          "partner": "Business Tampere",
          "reference": "GA §3.1.4",
          "description": "Two new mobility and energy services delivered through the Tampere.Finland app, so residents can engage with and use the smart sustainable-mobility and energy solutions.",
          "cities": [
            "Tampere"
          ],
          "wp": "WP6",
          "tasks": "T6.9 (to confirm)",
          "repositories": []
        }
      ]
    },
    "kpim": {
      "title": "KPI Manager",
      "layer": "KPI Catalogue Management",
      "reference": "D3.1 §4.3.13",
      "summary": "Manages the full KPI lifecycle: definition and metadata, data-source connections (REST, SQL and NoSQL, IoT, SensorThings/FROST), scheduled formula execution, targets and thresholds, history and trends.",
      "tools": [
        {
          "name": "KPI Manager (Digital Enabler)",
          "partner": "ENG",
          "reference": "D3.1 §4.3.13",
          "description": "KPI definition, metadata, data-source connections (REST, SQL/NoSQL, IoT, SensorThings/FROST), scheduled calculation, targets, thresholds and history.",
          "cities": [
            "All"
          ],
          "wp": "WP3",
          "tasks": "T3.2",
          "repositories": [
            {
              "label": "KPI-Manager",
              "url": "https://github.com/Urban-Flow-Organization/KPI-Manager"
            }
          ]
        }
      ],
      "video": {
        "src": "assets/videos/KPI_Manager_Urban-Flow.mp4",
        "title": "KPI Manager – demo video",
        "label": "Watch video"
      }
    },
    "rule": {
      "title": "Rule Manager",
      "layer": "KPI Catalogue Management",
      "reference": "D3.1 §4.3.14",
      "summary": "Defines and executes event-driven if-this-then-that rules on NGSI-LD entities, Data Mashup flows and external services, triggering e-mail, webhook, Kafka or Telegram actions.",
      "tools": [
        {
          "name": "Rule Manager (Digital Enabler)",
          "partner": "ENG",
          "reference": "D3.1 §4.3.14",
          "description": "Visual if-this-then-that rules on NGSI-LD entities, Data Mashup flows and external services, executed by scalable rule executors on Kafka.",
          "cities": [
            "All"
          ],
          "wp": "WP3",
          "tasks": "T3.2",
          "repositories": []
        }
      ]
    },
    "alerts": {
      "title": "Real-time Alerts",
      "layer": "KPI Catalogue Management",
      "reference": "D3.1 §4.3.15",
      "summary": "Timely notifications and automated reactions when monitored conditions, thresholds or anomalies are detected, executed by the Rule Manager over the Kafka event backbone.",
      "tools": [
        {
          "name": "Real-time Alerts on the Rule Manager",
          "partner": "ENG",
          "reference": "D3.1 §4.3.15",
          "description": "E-mail, Telegram, webhook and Kafka notifications and downstream workflows, triggered when rule conditions are met.",
          "cities": [
            "All"
          ],
          "wp": "WP3",
          "tasks": "T3.2",
          "repositories": []
        }
      ]
    },
    "wf": {
      "title": "Workflow Management",
      "layer": "Data Process Orchestration",
      "reference": "D3.1 §4.3.16",
      "summary": "Apache Airflow orchestrates ingestion, harmonisation, KPI calculation, simulations and metadata publication as code-defined DAGs, with scheduling, retries and monitoring.",
      "tools": [
        {
          "name": "Apache Airflow",
          "openSource": true,
          "integration": "ENG (T3.2 lead)",
          "reference": "D3.1 §4.3.16",
          "description": "Open-source orchestration of ingestion, KPI calculation, simulations and metadata publication as code-defined DAGs (Apache 2.0).",
          "wp": "WP3",
          "tasks": "T3.2",
          "repositories": [
            {
              "label": "Apache Airflow",
              "url": "https://github.com/apache/airflow"
            }
          ]
        }
      ]
    },
    "mashup": {
      "title": "Data Mashup",
      "layer": "Data Process Orchestration",
      "reference": "D3.1 §4.3.17",
      "summary": "Visual low-code editor (Data Mashup Editor, Digital Enabler) to combine, clean and harmonise heterogeneous sources into reusable data products. Mashups run as flows with triggers and targets such as Orion-LD, Kafka, MQTT or HTTP. Chimera adds semantic harmonisation.",
      "tools": [
        {
          "name": "Data Mashup Editor (Digital Enabler)",
          "partner": "ENG",
          "reference": "D3.1 §4.3.17",
          "description": "Visual low-code pipelines (mashups) run as flows with triggers and targets such as Orion-LD, Kafka, MQTT, HTTP and FHIR.",
          "cities": [
            "All"
          ],
          "wp": "WP3",
          "tasks": "T3.2",
          "repositories": []
        },
        {
          "name": "Chimera",
          "partner": "CEFRIEL",
          "reference": "GA §1.2.1.3",
          "description": "Framework for data enrichment and harmonisation with Semantic Web transformation pipelines, extended for Urban-Flow (e.g. GTFS to NeTEx/SIRI).",
          "cities": [
            "All"
          ],
          "wp": "WP3",
          "tasks": "T3.3",
          "repositories": [
            {
              "label": "Chimera for Urban-Flow",
              "url": "https://github.com/Urban-Flow-Organization/chimera-urbanflow-route"
            },
            {
              "label": "Chimera (original)",
              "url": "https://github.com/cefriel/chimera"
            }
          ]
        }
      ]
    },
    "pub": {
      "title": "Dataset Publishing",
      "layer": "Data Process Orchestration",
      "reference": "D3.1 §4.3.18",
      "summary": "Publishes datasets and data services with harmonised metadata (DCAT-AP, mobilityDCAT-AP) for open or controlled access, while datasets stay under their owners’ control. Implemented through Idra.",
      "tools": [
        {
          "name": "Idra – Open Data Federation Platform",
          "partner": "ENG",
          "reference": "D3.1 §4.3.18",
          "description": "Publication of datasets and data services with DCAT-AP and mobilityDCAT-AP metadata, for open or controlled access.",
          "cities": [
            "All"
          ],
          "wp": "WP3",
          "tasks": "T3.2",
          "repositories": [
            {
              "label": "Idra (Urban-Flow)",
              "url": "https://github.com/Urban-Flow-Organization/Idra"
            }
          ],
          "video": {
            "src": "assets/videos/Idra_Urban-Flow.mp4",
            "title": "Idra – demo video",
            "label": "Watch video"
          }
        }
      ]
    },
    "obj": {
      "title": "Object Storage",
      "layer": "Data Management",
      "reference": "D3.1 §4.3.19",
      "summary": "Garage, a European, S3-compatible distributed object store, keeps large datasets and digital assets: 3D tiles, simulation outputs, rasters, documents and models.",
      "tools": [
        {
          "name": "Garage",
          "openSource": true,
          "integration": "ENG (T3.2 lead)",
          "reference": "D3.1 §4.3.19",
          "description": "European, S3-compatible distributed object storage supported by NGI programmes; preferred over MinIO.",
          "wp": "WP3",
          "tasks": "T3.2",
          "repositories": [
            {
              "label": "Garage",
              "url": "https://github.com/deuxfleurs-org/garage"
            }
          ]
        }
      ]
    },
    "sdb": {
      "title": "Structured Database",
      "layer": "Data Management",
      "reference": "D3.1 §4.3.20",
      "summary": "PostgreSQL with PostGIS stores structured and geospatial information such as metadata, KPI definitions, configurations and intervention repositories; MySQL where lighter or legacy storage is needed.",
      "tools": [
        {
          "name": "PostgreSQL + PostGIS (MySQL where needed)",
          "openSource": true,
          "integration": "ENG (T3.2 lead)",
          "reference": "D3.1 §4.3.20",
          "description": "Relational and geospatial persistence for metadata, KPI definitions, configurations and intervention repositories.",
          "wp": "WP3",
          "tasks": "T3.2",
          "repositories": [
            {
              "label": "PostgreSQL (website)",
              "url": "https://www.postgresql.org"
            },
            {
              "label": "PostGIS (website)",
              "url": "https://postgis.net"
            }
          ]
        }
      ]
    },
    "dcat": {
      "title": "DCAT Metadata Management",
      "layer": "Data Management",
      "reference": "D3.1 §4.3.22",
      "summary": "Collects metadata from federated catalogues and transforms it into one DCAT-AP representation, so datasets from different technologies can be described and searched consistently. Implemented through Idra.",
      "tools": [
        {
          "name": "Idra – Open Data Federation Platform",
          "partner": "ENG",
          "reference": "D3.1 §4.3.22",
          "description": "Harvests metadata from federated catalogues and harmonises it to DCAT-AP for consistent search and publication.",
          "cities": [
            "All"
          ],
          "wp": "WP3",
          "tasks": "T3.2",
          "repositories": [
            {
              "label": "Idra (Urban-Flow)",
              "url": "https://github.com/Urban-Flow-Organization/Idra"
            }
          ],
          "video": {
            "src": "assets/videos/Idra_Urban-Flow.mp4",
            "title": "Idra – demo video",
            "label": "Watch video"
          }
        }
      ]
    },
    "datacat": {
      "title": "Data Catalogue",
      "layer": "Data Management",
      "reference": "D3.1 §4.3.25",
      "summary": "Main access point to discover, explore and access datasets from the platform and from federated catalogues, with search, filters, metadata and preview charts. Implemented through the Idra portal.",
      "tools": [
        {
          "name": "Idra – Open Data Federation Platform",
          "partner": "ENG",
          "reference": "D3.1 §4.3.25",
          "description": "Web portal and OpenAPI REST services to search, filter, preview and access datasets from local and federated catalogues.",
          "cities": [
            "All"
          ],
          "wp": "WP3",
          "tasks": "T3.2",
          "repositories": [
            {
              "label": "Idra (Urban-Flow)",
              "url": "https://github.com/Urban-Flow-Organization/Idra"
            }
          ],
          "video": {
            "src": "assets/videos/Idra_Urban-Flow.mp4",
            "title": "Idra – demo video",
            "label": "Watch video"
          }
        }
      ]
    },
    "geo": {
      "title": "GeoServer",
      "layer": "Data Management",
      "reference": "D3.1 §4.3.23",
      "summary": "Publishes maps and spatial datasets through OGC services (WMS, WFS, WCS, WMTS) for the Digital Twin, dashboards, participation and external GIS tools.",
      "tools": [
        {
          "name": "GeoServer",
          "openSource": true,
          "integration": "ENG (T3.2 lead)",
          "reference": "D3.1 §4.3.23",
          "description": "Publishes vector and raster layers through OGC WMS, WFS, WCS and WMTS for the twin, dashboards and GIS clients.",
          "wp": "WP3",
          "tasks": "T3.2",
          "repositories": [
            {
              "label": "GeoServer",
              "url": "https://github.com/geoserver/geoserver"
            }
          ]
        }
      ]
    },
    "inspire": {
      "title": "INSPIRE Metadata Management",
      "layer": "Data Management",
      "reference": "D3.1 §4.3.26",
      "summary": "GeoNetwork manages, validates and publishes metadata of geospatial datasets and services in line with INSPIRE, connected to the catalogue federator.",
      "tools": [
        {
          "name": "GeoNetwork",
          "openSource": true,
          "integration": "ENG (T3.2 lead)",
          "reference": "D3.1 §4.3.26",
          "description": "INSPIRE-aligned metadata catalogue for geospatial datasets and services, connected to the catalogue federator.",
          "wp": "WP3",
          "tasks": "T3.2",
          "repositories": [
            {
              "label": "GeoNetwork",
              "url": "https://github.com/geonetwork/core-geonetwork"
            }
          ]
        }
      ]
    },
    "dpf": {
      "title": "Data Portal Federator",
      "layer": "Data Management",
      "reference": "D3.1 §4.3.21",
      "summary": "Federates heterogeneous open-data catalogues under one access point. Idra harvests metadata from CKAN, DKAN, Socrata, OpenDataSoft, Junar, Zenodo and Orion-LD and harmonises it to DCAT-AP.",
      "tools": [
        {
          "name": "Idra – Open Data Federation Platform",
          "partner": "ENG",
          "reference": "D3.1 §4.3.21",
          "description": "Federates CKAN, DKAN, Socrata, OpenDataSoft, Junar, Zenodo and Orion-LD catalogues under one access point.",
          "cities": [
            "All"
          ],
          "wp": "WP3",
          "tasks": "T3.2",
          "repositories": [
            {
              "label": "Idra (Urban-Flow)",
              "url": "https://github.com/Urban-Flow-Organization/Idra"
            }
          ],
          "video": {
            "src": "assets/videos/Idra_Urban-Flow.mp4",
            "title": "Idra – demo video",
            "label": "Watch video"
          }
        }
      ]
    },
    "drf": {
      "title": "Data Repositories Federator",
      "layer": "Data Management",
      "reference": "D3.1 §4.3.24",
      "summary": "Presto runs SQL queries across distributed repositories without copying data, so mobility, energy and environmental data can be analysed together while staying with their owners.",
      "tools": [
        {
          "name": "Presto",
          "openSource": true,
          "integration": "ENG (T3.2 lead)",
          "reference": "D3.1 §4.3.24",
          "description": "Distributed SQL engine that queries heterogeneous repositories in place, without replicating data (Apache 2.0).",
          "wp": "WP3",
          "tasks": "T3.2",
          "repositories": [
            {
              "label": "Presto",
              "url": "https://github.com/prestodb/presto"
            }
          ]
        }
      ]
    },
    "dmv": {
      "title": "Data Model & Vocabularies Registry",
      "layer": "Data Management",
      "reference": "D3.1 §4.3.27",
      "summary": "Publishes the data models, vocabularies and semantic definitions used by the platform, so data exchanges can follow common standards. Implemented through Idra.",
      "tools": [
        {
          "name": "Minimal Interoperability Mechanisms (MIMs Plus) – development version",
          "partner": "OASC",
          "reference": "D3.1 §4.2 · GA T3.3",
          "description": "Interoperability requirements and mechanisms (MIMs Plus) adopted across layers; Urban-Flow learnings are fed back to the MIMs working groups and standardisation.",
          "cities": [
            "All"
          ],
          "wp": "WP3",
          "tasks": "T3.3",
          "repositories": [
            {
              "label": "MIMs (OASC website)",
              "url": "https://mims.oascities.org"
            }
          ]
        },
        {
          "name": "Idra – Open Data Federation Platform",
          "partner": "ENG",
          "reference": "D3.1 §4.3.27",
          "description": "Publishes the data models and vocabularies in use (NGSI-LD, DCAT-AP, mobilityDCAT-AP) as discoverable semantic resources.",
          "cities": [
            "All"
          ],
          "wp": "WP3",
          "tasks": "T3.2",
          "repositories": [
            {
              "label": "Idra (Urban-Flow)",
              "url": "https://github.com/Urban-Flow-Organization/Idra"
            }
          ],
          "video": {
            "src": "assets/videos/Idra_Urban-Flow.mp4",
            "title": "Idra – demo video",
            "label": "Watch video"
          }
        }
      ]
    },
    "etl": {
      "title": "ETL (Extract-Transform-Load) Processes",
      "layer": "Data Management",
      "reference": "GA §1.2.1.3 · D3.1 §4.3.17",
      "summary": "Processes between the connectors and data management that harmonise incoming data through open APIs such as OGC SensorThings and ETSI NGSI-LD. In Urban-Flow they run as Data Mashup flows with the Orion-LD context broker.",
      "tools": [
        {
          "name": "Orion-LD Context Broker",
          "openSource": true,
          "integration": "Urban-Flow fork",
          "reference": "GA §1.2.1.3 · catalogue",
          "description": "NGSI-LD context broker used as publish/subscribe store of harmonised context data.",
          "wp": "WP3",
          "tasks": "T3.2",
          "repositories": [
            {
              "label": "Orion-LD (Urban-Flow)",
              "url": "https://github.com/Urban-Flow-Organization/context.Orion-LD"
            }
          ]
        },
        {
          "name": "Data Mashup flows and Chimera pipelines",
          "partner": "ENG, CEFRIEL",
          "reference": "D3.1 §4.3.17",
          "description": "Extract-transform-load of incoming data into OGC SensorThings and NGSI-LD representations.",
          "cities": [
            "All"
          ],
          "wp": "WP3",
          "tasks": "T3.2, T3.3",
          "repositories": [
            {
              "label": "Chimera for Urban-Flow",
              "url": "https://github.com/Urban-Flow-Organization/chimera-urbanflow-route"
            }
          ]
        }
      ]
    },
    "c_open": {
      "title": "Open Data",
      "moduleName": "Open Data connectors",
      "layer": "Data Connectors",
      "reference": "D3.1 §4.3.28",
      "summary": "Connect the Data Catalogue to external open-data catalogues and repositories, harvesting and harmonising their metadata to DCAT-AP. Provided by Idra.",
      "tools": [
        {
          "name": "Idra – Open Data Federation Platform",
          "partner": "ENG",
          "reference": "D3.1 §4.3.28",
          "description": "Connectors to CKAN, DKAN, Socrata, OpenDataSoft, Junar, DCAT-AP dumps, SPARQL endpoints, NGSI sources and Zenodo.",
          "cities": [
            "All"
          ],
          "wp": "WP3",
          "tasks": "T3.2",
          "repositories": [
            {
              "label": "Idra (Urban-Flow)",
              "url": "https://github.com/Urban-Flow-Organization/Idra"
            }
          ],
          "video": {
            "src": "assets/videos/Idra_Urban-Flow.mp4",
            "title": "Idra – demo video",
            "label": "Watch video"
          }
        }
      ]
    },
    "c_iot": {
      "title": "IoT",
      "moduleName": "IoT connectors",
      "layer": "Data Connectors",
      "reference": "D3.1 §4.3.29",
      "summary": "IoT Agents translate device messages (MQTT, HTTP, LoRaWAN, LwM2M and others) into NGSI-LD entities and SensorThings resources, and support device registration and monitoring. Kentyou DataHub handles protocol heterogeneity.",
      "tools": [
        {
          "name": "FIWARE IoT Agents + FROST Server",
          "openSource": true,
          "integration": "ENG (T3.2 lead)",
          "reference": "D3.1 §4.3.29",
          "description": "Protocol adapters (JSON, LwM2M, UltraLight, LoRaWAN, Sigfox, ISOXML) to NGSI-LD and OGC SensorThings resources.",
          "wp": "WP3",
          "tasks": "T3.2",
          "repositories": [
            {
              "label": "FIWARE IoT Agents",
              "url": "https://github.com/FIWARE/catalogue/tree/master/iot-agents"
            },
            {
              "label": "FROST Server",
              "url": "https://github.com/FraunhoferIOSB/FROST-Server"
            }
          ]
        },
        {
          "name": "DataHub",
          "partner": "Kentyou",
          "reference": "GA §1.2.1.3",
          "description": "Manages protocol and device heterogeneity with data bridges and data models fitted to the pilots.",
          "wp": "WP3",
          "tasks": "T3.2",
          "repositories": [
            {
              "label": "kentyou-datahub (listed in the catalogue, not yet public)",
              "url": "https://github.com/Urban-Flow-Organization/kentyou-datahub"
            }
          ]
        }
      ]
    },
    "c_it": {
      "title": "IT Platforms",
      "moduleName": "IT Platform connectors",
      "layer": "Data Connectors",
      "reference": "D3.1 §4.3.30",
      "summary": "A logical integration capability, implemented case by case, to exchange data and services with municipal and third-party systems while respecting their security and governance rules.",
      "tools": [
        {
          "name": "TRUE Connector (IDS-based)",
          "partner": "ENG",
          "openSource": true,
          "reference": "D3.1 §4.3.30",
          "description": "Reference for secure, policy-aware connectors to municipal and third-party IT platforms; specific connectors are built case by case.",
          "wp": "WP3",
          "tasks": "T3.2",
          "repositories": [
            {
              "label": "TRUE Connector",
              "url": "https://github.com/Engineering-Research-and-Development/true-connector"
            }
          ]
        }
      ]
    },
    "c_repo": {
      "title": "Data Repositories",
      "moduleName": "Data Repository connectors",
      "layer": "Data Connectors",
      "reference": "D3.1 §4.3.31",
      "summary": "Connectors that give the Data Repositories Federator on-demand access to structured and unstructured databases (PostgreSQL, MongoDB, MySQL and others) without replicating data.",
      "tools": [
        {
          "name": "Presto connectors",
          "openSource": true,
          "integration": "ENG (T3.2 lead)",
          "reference": "D3.1 §4.3.31",
          "description": "Connectors to PostgreSQL, MongoDB, MySQL, object storage and other repositories for federated, on-demand access.",
          "wp": "WP3",
          "tasks": "T3.2",
          "repositories": [
            {
              "label": "Presto",
              "url": "https://github.com/prestodb/presto"
            }
          ]
        }
      ]
    },
    "dsc": {
      "title": "Data Spaces Connector",
      "layer": "Data Spaces Connector",
      "reference": "D3.1 §4.3.32",
      "summary": "Lets an organisation act as data provider, consumer or both while keeping control of usage conditions: publication of offers, contract agreements and policy-checked data access. The FIWARE Data Space Connector is the preferred implementation, with Simpl-Open as alternative.",
      "tools": [
        {
          "name": "FIWARE Data Space Connector",
          "partner": "D4P",
          "openSource": true,
          "reference": "D3.1 §4.3.32",
          "description": "Preferred implementation: product catalogue and marketplace, contract negotiation, policy-checked access and transfer with Eclipse Dataspace Components and the Dataspace Protocol.",
          "wp": "WP3",
          "tasks": "T3.3",
          "repositories": [
            {
              "label": "FIWARE Data Space Connector",
              "url": "https://github.com/FIWARE/data-space-connector"
            }
          ]
        },
        {
          "name": "Simpl-Open",
          "partner": "D4P",
          "reference": "D3.1 §4.3.32 · GA T3.3",
          "description": "Alternative or additional source of components, named in the Grant Agreement: provider and consumer agents, resource descriptions, policies, usage contracts and data-processing pipelines.",
          "wp": "WP3",
          "tasks": "T3.3",
          "repositories": []
        },
        {
          "name": "EU LDT Data Space Ready",
          "partner": "EU LDT Toolbox",
          "reference": "D3.1 §4.3.32",
          "description": "EU LDT Toolbox component for trusted data sharing; from v1.0.0 interoperable with the FIWARE Data Space Connector, so contracts can be negotiated between both.",
          "wp": "WP3",
          "tasks": "T3.3",
          "repositories": []
        }
      ]
    },
    "x_conf": {
      "title": "Configuration Management",
      "layer": "Data Spaces Connector",
      "reference": "D3.1 §4.3.32",
      "summary": "Onboarding of participants with trusted organisational identities, and configuration of connector services and endpoints.",
      "toolsFrom": "dsc"
    },
    "x_pol": {
      "title": "Policy Engine",
      "layer": "Data Spaces Connector",
      "reference": "D3.1 §4.3.32",
      "summary": "Evaluates machine-readable access and usage policies (for example ODRL) for every request: permitted operations, eligible consumers, validity periods and purposes.",
      "toolsFrom": "dsc"
    },
    "x_log": {
      "title": "Logging Service",
      "layer": "Data Spaces Connector",
      "reference": "D3.1 §4.3.32",
      "summary": "Records requests, agreements and rejected calls, supporting monitoring and governance of obligations that continue after data is delivered.",
      "toolsFrom": "dsc"
    },
    "x_con": {
      "title": "Contract management",
      "layer": "Data Spaces Connector",
      "reference": "D3.1 §4.3.32",
      "summary": "Publication of offers and review, acceptance or negotiation of contract agreements that identify the consumer, the resource and the accepted policy.",
      "toolsFrom": "dsc"
    },
    "x_ids": {
      "title": "IDS Protocol",
      "layer": "Data Spaces Connector",
      "reference": "D3.1 §4.3.32",
      "summary": "Dataspace Protocol interactions for catalogue, negotiation and transfer, keeping the platform independent of a single connector implementation (FIWARE or Simpl-Open).",
      "toolsFrom": "dsc"
    },
    "x_auth": {
      "title": "Auth Service",
      "layer": "Data Spaces Connector",
      "reference": "D3.1 §4.3.32",
      "summary": "Verifies the consumer’s credentials, participant attributes and agreement status before any request is routed to the data service.",
      "toolsFrom": "dsc"
    },
    "x_ex": {
      "title": "Data exchange",
      "layer": "Data Spaces Connector",
      "reference": "D3.1 §4.3.32",
      "summary": "Activates data access or transfer only when the agreement is valid and the policy evaluation permits it; non-compliant requests are rejected and recorded.",
      "toolsFrom": "dsc"
    },
    "s_it": {
      "title": "IT Platforms & legacy Systems (e.g. traffic management)",
      "layer": "Data Sources",
      "reference": "Architecture",
      "summary": "Existing municipal and third-party systems, such as traffic management, reached through the IT Platform connectors."
    },
    "s_open": {
      "title": "Open Data Portals",
      "layer": "Data Sources",
      "reference": "Architecture",
      "summary": "Public open-data portals of cities, regions and research communities, federated through the Open Data connectors and Idra."
    },
    "s_gis": {
      "title": "Local GIS",
      "layer": "Data Sources",
      "reference": "Architecture",
      "summary": "Municipal geographic information systems and geoportals providing base maps and spatial datasets."
    },
    "s_iot": {
      "title": "Sensors & IoT Devices",
      "layer": "Data Sources",
      "reference": "Architecture",
      "summary": "Field devices such as traffic, parking, weather and energy sensors, integrated through the IoT connectors."
    },
    "s_maps": {
      "title": "Maps",
      "layer": "Data Sources",
      "reference": "Architecture",
      "summary": "External base-map and map-tile services used by the visualisation components."
    },
    "ds_mob": {
      "title": "Mobility Data Space",
      "layer": "Data Spaces",
      "reference": "GA T3.3",
      "summary": "The European Mobility Data Space and related mobility data spaces, reached through the Data Spaces Connector with mobilityDCAT-AP discoverability."
    },
    "ds_other": {
      "title": "Other data spaces",
      "layer": "Data Spaces",
      "reference": "GA T3.3",
      "summary": "Further common European data spaces, for example DS4SSCC for smart and sustainable cities and communities."
    },
    "users": {
      "title": "User Management",
      "layer": "Identity & Access Manager",
      "reference": "D3.1 §4.3.33",
      "summary": "Keycloak administers digital identities: users, groups, roles, organisations and tenants, user lifecycle and federation with LDAP or Active Directory.",
      "tools": [
        {
          "name": "Keycloak",
          "openSource": true,
          "integration": "ENG (WP3 lead)",
          "reference": "D3.1 §4.3.33",
          "description": "Users, groups, roles, organisations, LDAP / Active Directory federation and lifecycle management.",
          "wp": "WP3",
          "tasks": "T3.1",
          "repositories": [
            {
              "label": "Keycloak",
              "url": "https://github.com/keycloak/keycloak"
            },
            {
              "label": "decidim-module-keycloak (Urban-Flow)",
              "url": "https://github.com/Urban-Flow-Organization/decidim-module-keycloak"
            }
          ]
        }
      ]
    },
    "authn": {
      "title": "Authentication",
      "layer": "Identity & Access Manager",
      "reference": "D3.1 §4.3.34",
      "summary": "Keycloak is the central trust authority: OAuth 2.0, OpenID Connect and SAML 2.0, single sign-on across all Toolbox services, MFA, password policies and session management.",
      "tools": [
        {
          "name": "Keycloak",
          "openSource": true,
          "integration": "ENG (WP3 lead)",
          "reference": "D3.1 §4.3.34",
          "description": "Central trust authority: OpenID Connect, OAuth 2.0, SAML 2.0, single sign-on and MFA for all Toolbox services.",
          "wp": "WP3",
          "tasks": "T3.1",
          "repositories": [
            {
              "label": "Keycloak",
              "url": "https://github.com/keycloak/keycloak"
            },
            {
              "label": "decidim-module-keycloak (Urban-Flow)",
              "url": "https://github.com/Urban-Flow-Organization/decidim-module-keycloak"
            }
          ]
        }
      ]
    },
    "authz": {
      "title": "Authorisation",
      "layer": "Identity & Access Manager",
      "reference": "D3.1 §4.3.35",
      "summary": "Keycloak role-based access control and fine-grained policies decide which modules, data and operations each stakeholder category can use.",
      "tools": [
        {
          "name": "Keycloak",
          "openSource": true,
          "integration": "ENG (WP3 lead)",
          "reference": "D3.1 §4.3.35",
          "description": "Role-based access control and fine-grained resource policies for each stakeholder category.",
          "wp": "WP3",
          "tasks": "T3.1",
          "repositories": [
            {
              "label": "Keycloak",
              "url": "https://github.com/keycloak/keycloak"
            },
            {
              "label": "decidim-module-keycloak (Urban-Flow)",
              "url": "https://github.com/Urban-Flow-Organization/decidim-module-keycloak"
            }
          ]
        }
      ]
    }
  },
  "newMarketplaceBlocks": [],
  "cityMatrix": [
    {
      "tool": "ELECTRA (EV bus fleet management)",
      "partner": "ETRA",
      "primaryCity": "Valencia",
      "group": "Marketplace",
      "cities": [
        "Florence",
        "Valencia",
        "Tampere"
      ]
    },
    {
      "tool": "U-NEED (Public transport network optimisation & accessibility analysis)",
      "partner": "ETRA",
      "primaryCity": "Valencia",
      "group": "Marketplace",
      "cities": [
        "Florence",
        "Valencia",
        "Tampere"
      ]
    },
    {
      "tool": "EBENTO (one stop-shop for energy efficiency tool)",
      "partner": "ETRA",
      "primaryCity": "Valencia",
      "group": "Marketplace",
      "cities": [
        "Valencia"
      ]
    },
    {
      "tool": "INES CLOUD (Digital urban mobility & parking)",
      "partner": "MUN",
      "primaryCity": "Florence",
      "group": "Marketplace",
      "cities": [
        "Florence",
        "Tampere"
      ]
    },
    {
      "tool": "MUV CLOUD (Multimodal mobility & LEZ tracking)",
      "partner": "MUN",
      "primaryCity": "Florence",
      "group": "Marketplace",
      "cities": [
        "Florence"
      ]
    },
    {
      "tool": "UrbanHeatAtlas (urban heat assessment and planning tool)",
      "partner": "TEC",
      "primaryCity": "Valencia",
      "group": "Marketplace",
      "cities": [
        "Florence",
        "Valencia",
        "Tampere"
      ]
    },
    {
      "tool": "Climate shelter Router",
      "partner": "TEC",
      "primaryCity": "Valencia & Florence",
      "group": "Marketplace",
      "cities": [
        "Florence",
        "Valencia"
      ]
    },
    {
      "tool": "Collective DER optimizing tool",
      "partner": "TEC",
      "primaryCity": "Valencia",
      "group": "Marketplace",
      "cities": [
        "Florence",
        "Valencia",
        "Tampere"
      ]
    },
    {
      "tool": "Energy Advising RAG",
      "partner": "TEC",
      "primaryCity": "Valencia",
      "group": "Marketplace",
      "cities": [
        "Valencia"
      ]
    },
    {
      "tool": "TATEBE (EV charging testbed)",
      "partner": "VTT",
      "primaryCity": "Tampere",
      "group": "Marketplace",
      "cities": [
        "Tampere"
      ]
    },
    {
      "tool": "Remote Control Center (Automated vehicle control)",
      "partner": "REM",
      "primaryCity": "Tampere",
      "group": "Marketplace",
      "cities": [
        "Tampere"
      ]
    },
    {
      "tool": "Kentyou Eye (Urban hypervisor visualization)",
      "partner": "KENT",
      "primaryCity": "All",
      "group": "Marketplace",
      "cities": [
        "Florence",
        "Valencia",
        "Tampere"
      ]
    },
    {
      "tool": "EPISODE-CityChem & BenMAP-CE (Air quality/HIA)",
      "partner": "PV",
      "primaryCity": "All",
      "group": "Marketplace",
      "cities": [
        "Florence",
        "Valencia",
        "Tampere"
      ]
    },
    {
      "tool": "Tampere.Finland App Integration",
      "partner": "BT",
      "primaryCity": "Tampere",
      "group": "Marketplace",
      "cities": [
        "Tampere"
      ]
    },
    {
      "tool": "PARCAR (Dynamic curb-side management)",
      "partner": "ETRA",
      "primaryCity": "Valencia",
      "group": "Marketplace",
      "cities": [
        "Florence",
        "Valencia"
      ]
    },
    {
      "tool": "EarthDataInsights (EDI) Cloud (EO data & AI analysis)",
      "partner": "LAT",
      "primaryCity": "All",
      "group": "Marketplace",
      "cities": [
        "Florence",
        "Valencia",
        "Tampere"
      ]
    },
    {
      "tool": "Urban Simulator",
      "partner": "LAT",
      "primaryCity": "All",
      "group": "Marketplace",
      "cities": [
        "Florence",
        "Valencia",
        "Tampere"
      ]
    },
    {
      "tool": "DECIDIM (Citizen engagement platform) + Plugins",
      "partner": "ENG",
      "primaryCity": "All",
      "group": "Cross-domain (mandatory)",
      "cities": [
        "Florence",
        "Valencia",
        "Tampere"
      ]
    },
    {
      "tool": "Digital Enabler (Data driven ecosystem platform) [KPI Manager]",
      "partner": "ENG",
      "primaryCity": "All",
      "group": "Cross-domain (mandatory)",
      "cities": [
        "Florence",
        "Valencia",
        "Tampere"
      ]
    },
    {
      "tool": "GeoCacher - User Interaction",
      "partner": "ENG",
      "primaryCity": "All",
      "group": "Cross-domain (mandatory)",
      "cities": [
        "Florence",
        "Valencia",
        "Tampere"
      ]
    },
    {
      "tool": "Data Catalogue (Idra)",
      "partner": "ENG",
      "primaryCity": "All",
      "group": "Cross-domain (mandatory)",
      "cities": [
        "Florence",
        "Valencia",
        "Tampere"
      ]
    },
    {
      "tool": "Catalog of Urban Regeneration Measures (TBD) ENG",
      "partner": "ENG",
      "primaryCity": "All",
      "group": "Cross-domain (mandatory)",
      "cities": [
        "Florence",
        "Valencia",
        "Tampere"
      ]
    },
    {
      "tool": "LDT Visualization tool",
      "partner": "TEC",
      "primaryCity": "Valencia",
      "group": "Cross-domain (mandatory)",
      "cities": [
        "Florence",
        "Valencia",
        "Tampere"
      ]
    },
    {
      "tool": "AI based Agent",
      "partner": "TEC",
      "primaryCity": "All",
      "group": "Cross-domain (mandatory)",
      "cities": [
        "Florence",
        "Valencia",
        "Tampere"
      ]
    },
    {
      "tool": "Chimera / Data Mashup Editor (Data harmonization framework)",
      "partner": "CEF/ENG",
      "primaryCity": "All",
      "group": "Cross-domain (mandatory)",
      "cities": [
        "Florence",
        "Valencia",
        "Tampere"
      ]
    },
    {
      "tool": "Minimal Interoperability Mechanisms Development Version (feedback)",
      "partner": "OASC",
      "primaryCity": "All",
      "group": "Cross-domain (mandatory)",
      "cities": [
        "Florence",
        "Valencia",
        "Tampere"
      ]
    }
  ]
};
