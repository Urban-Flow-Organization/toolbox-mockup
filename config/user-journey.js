/*
 * URBAN-FLOW TOOLBOX MOCKUP – MUNICIPALITY USER JOURNEY
 * =====================================================
 * Content of the "Municipality user journey" page (index.html#/journey).
 * The steps follow the User Journey of the Grant Agreement (Part B §1.2.1.1, Table 2: UJ S1–S8),
 * preceded by the preparatory "digitalising" step.
 * After saving, reload index.html in the browser (Cmd+Shift+R / Cmd+Option+R).
 *
 * The content after "window.UF_JOURNEY =" is plain JSON (double quotes, no trailing commas).
 *
 * title, subtitle, persona { name, role, goal }, coreTools [ { "tool", "block" } ]  – tools highlighted as core
 * steps[] in order:
 *   code        e.g. "UJ S1"                 loop     "Loop 1" | "Loop 2" | "Deployment" | "Monitoring" | "Preparation"
 *   title       short step title             ga       description from the Grant Agreement (Table 2)
 *   tasks       GA tasks, e.g. "T6.1, T6.2"  actions  list of what the municipality does in the Toolbox
 *   tools       list of { "tool": "<name shown>", "block": "<architecture block id>", "does": "<what it does here>" }
 *   output      result of the step            stakeholders  who is involved (from the GA)
 *   confidence  1–5, drawn as the "confidence of the municipality" curve
 *   feeling     short note shown on the curve
 *   overview    { summary, components [ { block, does } ] } – used by the Quick overview carousel (#/tour):
 *               list at least one component per layer; the first component matching each carouselCore slot
 *               fills that slot (LDT, e-Participation, KPI Manager, Idra, Marketplace).
 * tour          the fictional use case shown by the Quick overview carousel (#/tour): city, problem, goal,
 *               marketplace (max 2 Marketplace block ids), kpis, steps [ { code, loop, title, summary, story (narrative shown on the slide), flow [ { block, does } ] (numbered, in order), also [ { block, does } ] (other blocks mentioned in the story) ] } ]
 * carouselCore  the fixed slots shown on every slide (blocks, or "layer": "asf" for any Marketplace tool)
 */
window.UF_JOURNEY = {
  "title": "Municipality user journey",
  "subtitle": "How a municipality goes from the first data connection to a climate-neutral solution managed over time – and which Toolbox tools it uses at each step of the Urban-Flow User Journey.",
  "persona": {
    "name": "City of the pilot",
    "role": "Municipality – urban planning, mobility and climate departments (portal role: Municipality, with City Officers and the Platform Operator)",
    "goal": "Choose, deploy and monitor a climate-neutral intervention in a pilot area, with evidence and with the community."
  },
  "coreTools": [
    {
      "tool": "Local Digital Twin",
      "block": "ldt"
    },
    {
      "tool": "e-Participation (Decidim)",
      "block": "epart"
    },
    {
      "tool": "KPI Manager",
      "block": "kpim"
    },
    {
      "tool": "Idra",
      "block": "datacat"
    },
    {
      "tool": "Dynamic Space Management",
      "block": "space_dyn"
    },
    {
      "tool": "Climate & Heat Alerts",
      "block": "clim_alert"
    }
  ],
  "steps": [
    {
      "code": "Prep. B",
      "loop": "Preparation",
      "title": "Set up the city instance",
      "ga": "Phase 2 – Digitalising: Urban-Flow framework design and development.",
      "tasks": "WP3",
      "actions": [
        "Create users and roles for departments, partners and the City Living Lab",
        "Federate the city open-data portal and regional catalogues",
        "Connect sensors and IT platforms (parking, traffic, energy)",
        "Load the 3D city model and base layers"
      ],
      "tools": [
        {
          "tool": "Keycloak",
          "block": "users",
          "does": "Users, roles and single sign-on for the city instance."
        },
        {
          "tool": "Idra",
          "block": "c_open",
          "does": "Harvests the city and regional open-data catalogues."
        },
        {
          "tool": "Idra",
          "block": "datacat",
          "does": "One searchable catalogue of all city datasets."
        },
        {
          "tool": "IoT / IT connectors",
          "block": "c_iot",
          "does": "Brings sensor data into the platform as NGSI-LD."
        },
        {
          "tool": "Local Digital Twin",
          "block": "ldt",
          "does": "Loads the 3D city model and base layers."
        }
      ],
      "output": "City instance online: catalogue of datasets, live data flows and a 3D model.",
      "stakeholders": "Municipal IT, platform operator, technical partners",
      "confidence": 2,
      "feeling": "Data scattered across offices",
      "overview": {
        "summary": "The city instance is set up: people, data and the 3D model are in place.",
        "components": [
          {
            "block": "ldt",
            "does": "3D city model and base layers loaded"
          },
          {
            "block": "epart",
            "does": "Participation space for the City Living Lab opened"
          },
          {
            "block": "kpim",
            "does": "KPI set chosen from the catalogue"
          },
          {
            "block": "datacat",
            "does": "City and regional catalogues federated (Idra)"
          },
          {
            "block": "space_dyn",
            "does": "Pilot area and curb segments registered"
          },
          {
            "block": "admin",
            "does": "Instance configured"
          },
          {
            "block": "rule",
            "does": "Default thresholds prepared"
          },
          {
            "block": "wf",
            "does": "Ingestion pipelines scheduled"
          },
          {
            "block": "sdb",
            "does": "Harmonised storage created"
          },
          {
            "block": "c_open",
            "does": "Open-data portal harvested"
          },
          {
            "block": "c_iot",
            "does": "Sensors connected"
          },
          {
            "block": "dsc",
            "does": "Connector registered to the data space"
          },
          {
            "block": "users",
            "does": "Departments and partners onboarded"
          }
        ]
      }
    },
    {
      "code": "UJ S1",
      "loop": "Loop 1",
      "title": "Baseline and ex-ante evaluation",
      "ga": "Customisation of LDT and MDS in the pilot. Identify baselines and conduct ex-ante evaluations of environmental, health, social and economic impacts.",
      "tasks": "T6.1, T6.2, T6.5, T6.8",
      "actions": [
        "Pick indicators from the KPI Catalogue and compute the baseline",
        "Find and reuse datasets through the catalogue",
        "Map heat islands and space use in the pilot area",
        "Show the baseline in the Digital Twin"
      ],
      "tools": [
        {
          "tool": "KPI Manager",
          "block": "kpicat",
          "does": "Ready-made indicators from the KPI Catalogue."
        },
        {
          "tool": "KPI Manager",
          "block": "kpim",
          "does": "Computes and stores the baseline values."
        },
        {
          "tool": "Idra",
          "block": "datacat",
          "does": "Finds the datasets needed for the baseline."
        },
        {
          "tool": "Climate & Heat Alerts",
          "block": "clim_alert",
          "does": "Urban heat-island and heat-stress baseline."
        },
        {
          "tool": "Space Use Planning",
          "block": "space_plan",
          "does": "Accessibility and space-use analysis of the pilot area."
        },
        {
          "tool": "Local Digital Twin",
          "block": "ldt",
          "does": "Baseline layers on the 3D model."
        }
      ],
      "output": "Baseline report with KPIs and an ex-ante assessment of the pilot area.",
      "stakeholders": "Urban planners, environmental analysts, public authorities, researchers, energy and mobility providers",
      "confidence": 3,
      "feeling": "First shared picture of the problem",
      "overview": {
        "summary": "Measure where the pilot area starts from, before any intervention.",
        "components": [
          {
            "block": "ldt",
            "does": "Baseline layers shown on the 3D model"
          },
          {
            "block": "epart",
            "does": "City Living Lab informed of the baseline"
          },
          {
            "block": "kpim",
            "does": "Baseline KPIs computed"
          },
          {
            "block": "datacat",
            "does": "Datasets for the baseline found and reused (Idra)"
          },
          {
            "block": "clim_alert",
            "does": "Heat-island and heat-stress baseline"
          },
          {
            "block": "kpicat",
            "does": "Indicators picked from the KPI Catalogue"
          },
          {
            "block": "mashup",
            "does": "Sources harmonised"
          },
          {
            "block": "drf",
            "does": "History queried with live data"
          },
          {
            "block": "c_iot",
            "does": "Live sensor data"
          },
          {
            "block": "x_con",
            "does": "External mobility data requested under contract"
          },
          {
            "block": "authz",
            "does": "Access per department"
          }
        ]
      }
    },
    {
      "code": "UJ S2",
      "loop": "Loop 2",
      "title": "Co-create alternative measures",
      "ga": "Co-create alternative urban regeneration measures through participatory workshops and integrate them into planning frameworks in the City Living Labs.",
      "tasks": "T6.2, T6.5, T6.8",
      "actions": [
        "Open a participatory process for the pilot area",
        "Show the baseline in the Digital Twin during workshops",
        "Collect proposals and map comments",
        "Browse proven measures in the catalogue"
      ],
      "tools": [
        {
          "tool": "e-Participation (Decidim)",
          "block": "epart",
          "does": "Participatory process, map comments and proposals."
        },
        {
          "tool": "Local Digital Twin",
          "block": "ldt",
          "does": "Baseline views embedded in the workshops (EU-LDT-Participate)."
        },
        {
          "tool": "Catalogue of Urban Regeneration Measures",
          "block": "cat",
          "does": "Proven measures with expected impacts."
        },
        {
          "tool": "KPI Manager",
          "block": "kpim",
          "does": "Baseline KPIs shown to participants."
        }
      ],
      "output": "Long list of alternative measures proposed with the community.",
      "stakeholders": "Community representatives, NGOs, public officials, researchers, energy and mobility providers",
      "confidence": 3.4,
      "feeling": "Many ideas, not yet comparable",
      "overview": {
        "summary": "Co-create alternative measures with citizens and stakeholders.",
        "components": [
          {
            "block": "ldt",
            "does": "Baseline views used in workshops"
          },
          {
            "block": "epart",
            "does": "Process, map comments and proposals"
          },
          {
            "block": "kpim",
            "does": "Baseline KPIs shown to participants"
          },
          {
            "block": "datacat",
            "does": "Open datasets linked to the debate (Idra)"
          },
          {
            "block": "space_plan",
            "does": "Quick accessibility check of proposals"
          },
          {
            "block": "cat",
            "does": "Proven measures suggested"
          },
          {
            "block": "mashup",
            "does": "Proposals geo-referenced and joined to data"
          },
          {
            "block": "geo",
            "does": "Maps served in the process"
          },
          {
            "block": "c_open",
            "does": "Open data refreshed"
          },
          {
            "block": "x_ex",
            "does": "Lessons from other cities consulted"
          },
          {
            "block": "users",
            "does": "Citizens and stakeholders sign in"
          }
        ]
      }
    },
    {
      "code": "UJ S3",
      "loop": "Loop 1 · 2nd iteration",
      "title": "Validate and design 4–5 scenarios",
      "ga": "Validate the sustainability of the mitigation actions and of the alternatives proposed in Loop 2. Co-design 4–5 sustainable alternative solutions.",
      "tasks": "T6.3, T6.6, T6.9",
      "actions": [
        "Simulate each alternative with Marketplace tools",
        "Estimate heat-stress and health effects",
        "Compare scenarios side by side in 3D",
        "Store forecast KPIs for each scenario"
      ],
      "tools": [
        {
          "tool": "Dynamic Space Management",
          "block": "space_dyn",
          "does": "Simulates curb-side use, pricing and occupancy per scenario."
        },
        {
          "tool": "Thermal Comfort Routes",
          "block": "thermal",
          "does": "Checks shaded routes and climate shelters."
        },
        {
          "tool": "Local Digital Twin",
          "block": "ldt",
          "does": "Side-by-side 3D comparison of scenarios."
        },
        {
          "tool": "KPI Manager",
          "block": "kpim",
          "does": "Forecast KPIs next to the baseline."
        }
      ],
      "output": "4–5 sustainable scenarios with forecast KPIs and 3D views.",
      "stakeholders": "Urban planners, environmental analysts, public authorities, researchers, energy and mobility providers",
      "confidence": 4,
      "feeling": "Alternatives are now comparable",
      "overview": {
        "summary": "Simulate the alternatives and keep 4–5 sustainable scenarios.",
        "components": [
          {
            "block": "ldt",
            "does": "Scenarios compared side by side in 3D"
          },
          {
            "block": "epart",
            "does": "Scenarios published for feedback"
          },
          {
            "block": "kpim",
            "does": "Forecast KPIs per scenario"
          },
          {
            "block": "datacat",
            "does": "Simulation inputs taken from the catalogue (Idra)"
          },
          {
            "block": "space_dyn",
            "does": "Curb use, pricing and occupancy simulated"
          },
          {
            "block": "thermal",
            "does": "Shaded routes and climate shelters checked"
          },
          {
            "block": "agent",
            "does": "“What if” questions answered"
          },
          {
            "block": "wf",
            "does": "Simulation runs orchestrated"
          },
          {
            "block": "obj",
            "does": "Scenario outputs stored"
          },
          {
            "block": "c_repo",
            "does": "Historical data via repository connector"
          },
          {
            "block": "x_pol",
            "does": "Usage policies of external data enforced"
          },
          {
            "block": "authz",
            "does": "Planners and partners access results"
          }
        ]
      }
    },
    {
      "code": "UJ S4",
      "loop": "Loop 2 · 2nd iteration",
      "title": "Final vote",
      "ga": "Final vote of the solution to be implemented in the pilot site, based on the 4–5 sustainable alternative scenarios of UJ S3.",
      "tasks": "T6.3, T6.6, T6.9",
      "actions": [
        "Publish the scenarios with their 3D views and KPIs",
        "Run the vote with verified participants",
        "Publish the result and the reasons for the decision"
      ],
      "tools": [
        {
          "tool": "e-Participation (Decidim)",
          "block": "epart",
          "does": "Runs the vote and publishes the outcome."
        },
        {
          "tool": "Local Digital Twin",
          "block": "ldt",
          "does": "Each scenario shown to voters."
        },
        {
          "tool": "KPI Manager",
          "block": "kpim",
          "does": "Forecast KPIs per scenario on the voting page."
        },
        {
          "tool": "Keycloak",
          "block": "authz",
          "does": "One verified participant, one vote."
        }
      ],
      "output": "Selected solution for the pilot area, backed by the community.",
      "stakeholders": "All members of the City Living Lab",
      "confidence": 4.5,
      "feeling": "Decision with evidence and consensus",
      "overview": {
        "summary": "The City Living Lab votes the solution to implement.",
        "components": [
          {
            "block": "ldt",
            "does": "Each scenario shown to voters"
          },
          {
            "block": "epart",
            "does": "Vote and outcome"
          },
          {
            "block": "kpim",
            "does": "Forecast KPIs on the voting page"
          },
          {
            "block": "pub",
            "does": "Vote results published as open data (Idra)"
          },
          {
            "block": "space_dyn",
            "does": "Selected scenario and its parameters frozen"
          },
          {
            "block": "dash",
            "does": "Results dashboard"
          },
          {
            "block": "pub",
            "does": "Results dataset prepared"
          },
          {
            "block": "datacat",
            "does": "Results listed in the catalogue"
          },
          {
            "block": "c_open",
            "does": "Results exposed to the open-data portal"
          },
          {
            "block": "x_ex",
            "does": "Results offered to the data space"
          },
          {
            "block": "authz",
            "does": "One verified participant, one vote"
          }
        ]
      }
    },
    {
      "code": "UJ S5",
      "loop": "Deployment",
      "title": "Collaborative procurement",
      "ga": "Develop collaborative procurement frameworks for implementing the selected solutions in the pilot sites (rules defined in T2.6).",
      "tasks": "T2.6, T6.4, T6.7, T6.10",
      "actions": [
        "Publish the datasets and specifications needed by bidders",
        "Set KPI targets to include in the contract",
        "Agree data-sharing terms with providers",
        "Keep citizens informed"
      ],
      "tools": [
        {
          "tool": "Idra",
          "block": "pub",
          "does": "Publishes datasets and specifications for the tender."
        },
        {
          "tool": "KPI Manager",
          "block": "kpim",
          "does": "Targets used as contractual performance indicators."
        },
        {
          "tool": "Data Spaces Connector",
          "block": "dsc",
          "does": "Data-sharing agreements with providers."
        },
        {
          "tool": "e-Participation (Decidim)",
          "block": "epart",
          "does": "Transparency page on the procurement."
        }
      ],
      "output": "Procurement framework with KPI-based targets and data-sharing terms.",
      "stakeholders": "Procurement specialists, local government officials, private-sector stakeholders",
      "confidence": 3.2,
      "feeling": "Administrative effort, clearer with shared data",
      "overview": {
        "summary": "Procure the solution with shared data and KPI-based targets.",
        "components": [
          {
            "block": "ldt",
            "does": "Specifications illustrated in 3D"
          },
          {
            "block": "epart",
            "does": "Transparency page on the procurement"
          },
          {
            "block": "kpim",
            "does": "Targets used as contract indicators"
          },
          {
            "block": "pub",
            "does": "Specifications and datasets published for bidders (Idra)"
          },
          {
            "block": "space_dyn",
            "does": "Requirements for the operator platform"
          },
          {
            "block": "dash",
            "does": "Tender monitoring"
          },
          {
            "block": "pub",
            "does": "Tender datasets published"
          },
          {
            "block": "dcat",
            "does": "DCAT-AP metadata for bidders"
          },
          {
            "block": "c_it",
            "does": "Interface for the operator platform defined"
          },
          {
            "block": "x_con",
            "does": "Data-sharing contracts with providers"
          },
          {
            "block": "users",
            "does": "External partner accounts"
          }
        ]
      }
    },
    {
      "code": "UJ S6",
      "loop": "Deployment",
      "title": "Deploy the solution",
      "ga": "Deploy co-created solutions in the pilot areas, focusing on dynamic public-space management, sustainable mobility and energy optimisation.",
      "tasks": "T6.4, T6.7, T6.10",
      "actions": [
        "Configure the new curb-side and space rules",
        "Set up monitoring rules and thresholds",
        "Update the Digital Twin with the as-built situation",
        "Publish the new datasets"
      ],
      "tools": [
        {
          "tool": "Dynamic Space Management",
          "block": "space_dyn",
          "does": "Applies time windows, pricing and temporary uses."
        },
        {
          "tool": "Rule Manager",
          "block": "rule",
          "does": "Thresholds that will trigger alerts."
        },
        {
          "tool": "Local Digital Twin",
          "block": "ldt",
          "does": "As-built layer of the intervention."
        },
        {
          "tool": "Idra",
          "block": "pub",
          "does": "Publishes the new datasets of the solution."
        }
      ],
      "output": "Solution live in the pilot area and visible in the Toolbox.",
      "stakeholders": "Urban developers, mobility service providers, energy operators, local businesses",
      "confidence": 4,
      "feeling": "Change on the street",
      "overview": {
        "summary": "The solution goes live in the pilot area.",
        "components": [
          {
            "block": "ldt",
            "does": "As-built layer of the intervention"
          },
          {
            "block": "epart",
            "does": "Citizens informed of the go-live"
          },
          {
            "block": "kpim",
            "does": "KPIs switched to live data"
          },
          {
            "block": "pub",
            "does": "New datasets of the solution published (Idra)"
          },
          {
            "block": "space_dyn",
            "does": "Time windows, pricing and temporary uses applied"
          },
          {
            "block": "rule",
            "does": "Monitoring thresholds set"
          },
          {
            "block": "wf",
            "does": "Live pipelines running"
          },
          {
            "block": "geo",
            "does": "Updated map layers"
          },
          {
            "block": "c_it",
            "does": "Operator platform connected"
          },
          {
            "block": "x_conf",
            "does": "Connector configured for the new data"
          },
          {
            "block": "authz",
            "does": "Operator permissions"
          }
        ]
      }
    },
    {
      "code": "UJ S7",
      "loop": "Monitoring",
      "title": "Ongoing monitoring",
      "ga": "Conduct ongoing evaluations of implemented measures to monitor impacts and refine strategies. Assess data and feedback to co-develop mitigation actions.",
      "tasks": "T6.4, T6.7, T6.10",
      "actions": [
        "Compare KPIs with baseline and forecast every quarter",
        "Receive real-time alerts on thresholds",
        "Watch heat-stress alerts in summer",
        "Collect citizen feedback"
      ],
      "tools": [
        {
          "tool": "KPI Manager",
          "block": "kpim",
          "does": "Periodic evaluation against baseline and targets."
        },
        {
          "tool": "Dashboards",
          "block": "dash",
          "does": "Trends and maps for decision makers."
        },
        {
          "tool": "Real-time Alerts",
          "block": "alerts",
          "does": "Notifies officers when thresholds are exceeded."
        },
        {
          "tool": "Climate & Heat Alerts",
          "block": "clim_alert",
          "does": "Heat-stress alerts for the pilot area."
        },
        {
          "tool": "e-Participation (Decidim)",
          "block": "epart",
          "does": "Feedback and results reported to citizens."
        }
      ],
      "output": "Quarterly evaluation of impacts with citizen feedback.",
      "stakeholders": "Data analysts, local administrators, community leaders, policy experts",
      "confidence": 4.5,
      "feeling": "Impact is measured, not assumed",
      "overview": {
        "summary": "Check every quarter whether the solution delivers the expected impact.",
        "components": [
          {
            "block": "ldt",
            "does": "Live layers on the 3D model"
          },
          {
            "block": "epart",
            "does": "Feedback and results reported to citizens"
          },
          {
            "block": "kpim",
            "does": "Quarterly evaluation against baseline and targets"
          },
          {
            "block": "datacat",
            "does": "Updated datasets in the catalogue (Idra)"
          },
          {
            "block": "clim_alert",
            "does": "Heat-stress alerts for the pilot area"
          },
          {
            "block": "dash",
            "does": "Trends and maps for decision makers"
          },
          {
            "block": "alerts",
            "does": "Real-time alerts to officers"
          },
          {
            "block": "wf",
            "does": "Scheduled KPI computation"
          },
          {
            "block": "drf",
            "does": "Live and historical data federated"
          },
          {
            "block": "c_iot",
            "does": "Sensor data flowing"
          },
          {
            "block": "x_log",
            "does": "Data exchanges logged"
          },
          {
            "block": "authn",
            "does": "Single sign-on for monitoring teams"
          }
        ]
      }
    },
    {
      "code": "UJ S8",
      "loop": "Monitoring",
      "title": "Climate-neutral solution management",
      "ga": "Co-create mitigation action plans based on ongoing evaluations; implement mitigation measures to optimise resilience and effectiveness, then return to UJ S7.",
      "tasks": "T6.4, T6.7, T6.10",
      "actions": [
        "Test corrective measures in the Digital Twin",
        "Ask the AI assistant for evidence and options",
        "Co-create the mitigation plan with the community",
        "Share data and lessons with other cities"
      ],
      "tools": [
        {
          "tool": "Local Digital Twin",
          "block": "ldt",
          "does": "What-if tests of corrective measures."
        },
        {
          "tool": "AI-based Agent",
          "block": "agent",
          "does": "Answers questions on data and documents."
        },
        {
          "tool": "e-Participation (Decidim)",
          "block": "epart",
          "does": "Co-creation of the mitigation plan."
        },
        {
          "tool": "Data Spaces Connector",
          "block": "dsc",
          "does": "Shares data with replication cities."
        },
        {
          "tool": "Idra",
          "block": "dcat",
          "does": "DCAT-AP metadata for the shared datasets."
        }
      ],
      "output": "Mitigation action plan; the cycle returns to UJ S7.",
      "stakeholders": "Environmental planners, urban policymakers, citizen groups, technical consultants",
      "confidence": 5,
      "feeling": "A managed, improving solution",
      "overview": {
        "summary": "Improve the solution with a co-created mitigation plan, then monitor again.",
        "components": [
          {
            "block": "ldt",
            "does": "Corrective measures tested in 3D"
          },
          {
            "block": "epart",
            "does": "Mitigation plan co-created"
          },
          {
            "block": "kpim",
            "does": "Revised targets"
          },
          {
            "block": "dcat",
            "does": "Datasets described with DCAT-AP for reuse (Idra)"
          },
          {
            "block": "thermal",
            "does": "Shaded routes re-checked after the changes"
          },
          {
            "block": "agent",
            "does": "Evidence and options suggested"
          },
          {
            "block": "mashup",
            "does": "New data combined for the plan"
          },
          {
            "block": "dmv",
            "does": "Shared data models for replication"
          },
          {
            "block": "c_repo",
            "does": "Data repositories connected"
          },
          {
            "block": "x_ex",
            "does": "Data shared with replication cities"
          },
          {
            "block": "authz",
            "does": "Partners from other cities invited"
          }
        ]
      }
    }
  ],
  "carouselCore": [
    {
      "slot": "Local Digital Twin",
      "blocks": [
        "ldt"
      ]
    },
    {
      "slot": "e-Participation",
      "blocks": [
        "epart"
      ]
    },
    {
      "slot": "KPI Manager",
      "blocks": [
        "kpim"
      ]
    },
    {
      "slot": "Idra",
      "blocks": [
        "datacat",
        "pub",
        "dcat",
        "c_open",
        "dpf"
      ]
    },
    {
      "slot": "Marketplace",
      "layer": "asf"
    }
  ],
  "tour": {
    "title": "Use case: Valdarena",
    "subtitle": "Cool and clear streets in the Old Town",
    "city": {
      "name": "Valdarena",
      "note": "Fictional city",
      "population": "≈ 420,000 residents",
      "description": "A mid-sized European city with a dense historic centre (the Old Town) inside a low-emission zone, summer heat waves getting longer, and delivery vans competing for little curb space.",
      "inspiredBy": "Inspired by the pilot sheets of Valencia, Florence and Tampere (Grant Agreement, Part B §1.2.1.4)."
    },
    "problem": "Strong heat stress from noon to 6 p.m. in summer and delivery congestion in the narrow streets of the historic centre.",
    "goal": "Reallocate curb space dynamically: loading windows in the morning and a “heat mode” that frees streets from vans on red-alert days.",
    "marketplace": [
      "space_dyn",
      "clim_alert"
    ],
    "kpis": [
      {
        "label": "Delivery-related curb congestion",
        "value": "−30%"
      },
      {
        "label": "Urban heat island at street level",
        "value": "−1.5 °C"
      },
      {
        "label": "Geofenced areas monitored",
        "value": "≥ 10"
      }
    ],
    "steps": [
      {
        "code": "Prep. B",
        "loop": "Preparation",
        "title": "Valdarena joins the Toolbox",
        "summary": "The city IT team opens the Valdarena instance and connects what the city already has: curb sensors, the LEZ cameras, the weather stations and the open-data portal.",
        "flow": [
          {
            "block": "users",
            "does": "Accounts for mobility, environment and IT"
          },
          {
            "block": "authn",
            "does": "Single sign-on with the municipal login"
          },
          {
            "block": "s_iot",
            "does": "640 kerb sensors, 18 weather stations"
          },
          {
            "block": "c_iot",
            "does": "Sensors connected to the platform"
          },
          {
            "block": "etl",
            "does": "Live state of every bay"
          },
          {
            "block": "sdb",
            "does": "Harmonised history stored"
          },
          {
            "block": "ldt",
            "does": "3D model of the Old Town loaded"
          }
        ],
        "story": "Valdarena (420,000 people) has a historic centre, the Old Town, inside a low-emission zone: summers keep getting hotter and delivery vans fight for the few kerb spaces. Chiara, mobility officer, decides to try the Urban-Flow Toolbox. Davide, from municipal IT, opens the Valdarena instance, gives each department an account, connects kerb sensors and weather stations, harvests the open-data portal into the catalogue and loads the 3D model of the Old Town.",
        "also": [
          {
            "block": "c_open",
            "does": "City open-data portal harvested (Idra)"
          },
          {
            "block": "datacat",
            "does": "All datasets in one catalogue (Idra)"
          }
        ]
      },
      {
        "code": "UJ S1",
        "loop": "Loop 1",
        "title": "How hot, how congested?",
        "summary": "The baseline shows that in summer the Old Town reaches strong heat stress from noon to 6 p.m., while one delivery stop in three happens in double parking.",
        "flow": [
          {
            "block": "s_iot",
            "does": "Kerb sensors and weather stations"
          },
          {
            "block": "c_iot",
            "does": "Live data"
          },
          {
            "block": "clim_alert",
            "does": "Heat-island and heat-stress baseline"
          },
          {
            "block": "kpim",
            "does": "Baseline KPIs computed"
          },
          {
            "block": "ldt",
            "does": "Heat and delivery hotspots on the 3D model"
          }
        ],
        "story": "Chiara picks two indicators from the KPI Catalogue: heat-stress hours and double-parked deliveries. Heat data come from Climate & Heat Alerts, delivery data from the kerb sensors, and regional traffic counts from the Mobility Data Space. For the first time both problems appear on the same 3D map: strong heat stress from noon to 6 p.m., and one delivery in three in double parking. This is the baseline.",
        "also": [
          {
            "block": "kpicat",
            "does": "Indicators picked from the catalogue"
          },
          {
            "block": "x_con",
            "does": "Contract for regional traffic counts"
          },
          {
            "block": "ds_mob",
            "does": "Regional traffic data from the Mobility Data Space"
          }
        ]
      },
      {
        "code": "UJ S2",
        "loop": "Loop 2",
        "title": "The Old Town speaks",
        "summary": "Shopkeepers, couriers and residents co-create ideas: early loading windows, shade for the afternoon and fewer vans on the hottest days.",
        "flow": [
          {
            "block": "users",
            "does": "Citizens, shopkeepers and couriers sign in"
          },
          {
            "block": "epart",
            "does": "Process, map comments and proposals"
          },
          {
            "block": "ldt",
            "does": "3D model used in the workshop"
          },
          {
            "block": "kpim",
            "does": "Baseline KPIs next to each proposal"
          },
          {
            "block": "cat",
            "does": "Proven measures: loading windows, shading, de-paving"
          }
        ],
        "story": "The City Living Lab meets in the Old Town. Residents, shopkeepers and couriers sign in and join the process in e-Participation, with the 3D model and the baseline KPIs on screen. Rosa, who runs a café on Via dei Tintori, wants shade for her tables in the afternoon; VeloCargo's couriers want loading slots early in the morning; residents ask for fewer vans on the hottest days. The Catalogue of Urban Regeneration Measures suggests what has worked elsewhere.",
        "also": [
          {
            "block": "geo",
            "does": "Maps served inside the process"
          }
        ]
      },
      {
        "code": "UJ S3",
        "loop": "Loop 1 · 2nd iteration",
        "title": "Three futures for the Old Town",
        "summary": "Three scenarios are simulated: A) morning loading windows; B) A + a “heat mode” that closes 6 streets to vans on red-alert days; C) B + 40 bays turned into shaded green space.",
        "flow": [
          {
            "block": "clim_alert",
            "does": "Heat forecasts that trigger heat mode"
          },
          {
            "block": "space_dyn",
            "does": "Loading windows and heat-mode geofences simulated"
          },
          {
            "block": "ldt",
            "does": "Scenarios side by side in 3D"
          },
          {
            "block": "kpim",
            "does": "Forecast KPIs per scenario"
          },
          {
            "block": "epart",
            "does": "Scenarios published for feedback"
          }
        ],
        "story": "The ideas become three futures. A: loading windows from 7 to 11. B: A plus a “heat mode” that closes 6 streets to vans when Climate & Heat Alerts forecasts a red alert. C: B plus 40 bays turned into shaded green space. Dynamic Space Management simulates each one, VeloCargo shares anonymised delivery routes through the Mobility Data Space for planning only, and Chiara compares the scenarios in 3D with forecast KPIs before publishing them in e-Participation.",
        "also": [
          {
            "block": "ds_mob",
            "does": "Anonymised courier routes"
          },
          {
            "block": "x_pol",
            "does": "“Planning only” usage policy enforced"
          }
        ]
      },
      {
        "code": "UJ S4",
        "loop": "Loop 2 · 2nd iteration",
        "title": "Valdarena chooses B",
        "summary": "The City Living Lab votes: scenario B wins with 58%, with an amendment to add shaded seating on two squares.",
        "flow": [
          {
            "block": "ldt",
            "does": "Each scenario shown in 3D"
          },
          {
            "block": "kpim",
            "does": "Forecast KPIs on the voting page"
          },
          {
            "block": "epart",
            "does": "Vote and outcome"
          },
          {
            "block": "authz",
            "does": "One verified participant, one vote"
          },
          {
            "block": "pub",
            "does": "Result published as open data (Idra)"
          }
        ],
        "story": "The scenarios go back to the Living Lab with their 3D views and forecast KPIs. Voting lasts two weeks, and each verified resident votes once. Scenario B wins with 58%, with an amendment from Rosa and the residents: shaded seating on two squares. The result is published as open data through Idra.",
        "also": []
      },
      {
        "code": "UJ S5",
        "loop": "Deployment",
        "title": "Buying it together",
        "summary": "The city tenders the curb sensors and the operator service with KPI-based targets, and signs data-sharing agreements with the couriers.",
        "flow": [
          {
            "block": "kpim",
            "does": "Targets used as contract indicators"
          },
          {
            "block": "pub",
            "does": "Datasets for bidders published (Idra)"
          },
          {
            "block": "dcat",
            "does": "DCAT-AP metadata (Idra)"
          },
          {
            "block": "x_con",
            "does": "Data-sharing contract with the couriers"
          },
          {
            "block": "ds_mob",
            "does": "Agreement registered in the Mobility Data Space"
          }
        ],
        "story": "To make B real, the city tenders the kerb sensors and the operator service, with the KPI targets written into the contract. Bidders download the datasets published through Idra, with DCAT-AP metadata. VeloCargo and two other couriers sign a data-sharing agreement through the Data Spaces Connector, and citizens follow the tender on a transparency page in e-Participation.",
        "also": [
          {
            "block": "epart",
            "does": "Transparency page on the tender"
          }
        ]
      },
      {
        "code": "UJ S6",
        "loop": "Deployment",
        "title": "Heat mode goes live",
        "summary": "12 geofenced areas go live: loading windows 7–11 every day and, on red-alert days, heat mode from 12 to 18.",
        "flow": [
          {
            "block": "clim_alert",
            "does": "Red-alert forecast"
          },
          {
            "block": "rule",
            "does": "Rule: red alert → heat mode"
          },
          {
            "block": "space_dyn",
            "does": "Loading windows and heat-mode geofences applied"
          },
          {
            "block": "c_it",
            "does": "Rules pushed to external platforms"
          },
          {
            "block": "s_it",
            "does": "LEZ gates and courier apps"
          }
        ],
        "story": "On 1 June 12 geofenced areas go live. Every morning loading windows run from 7 to 11. On red-alert days a rule switches heat mode on from 12 to 18: Climate & Heat Alerts sends the forecast, the Rule Manager decides, Dynamic Space Management applies the geofences and pushes them to the LEZ gates and courier apps. The new layout appears in the Digital Twin and the geofences are published as open data.",
        "also": [
          {
            "block": "ldt",
            "does": "As-built layer in 3D"
          },
          {
            "block": "pub",
            "does": "Geofences published as open data (Idra)"
          }
        ]
      },
      {
        "code": "UJ S7",
        "loop": "Monitoring",
        "title": "The first heat wave",
        "summary": "In July a red alert switches heat mode on automatically; officers get notified, couriers reroute and the KPIs show the effect within the week.",
        "flow": [
          {
            "block": "s_iot",
            "does": "Kerb sensors and weather stations"
          },
          {
            "block": "c_iot",
            "does": "Live data"
          },
          {
            "block": "etl",
            "does": "Sensor states updated in real time"
          },
          {
            "block": "clim_alert",
            "does": "Red alert"
          },
          {
            "block": "rule",
            "does": "Thresholds evaluated"
          },
          {
            "block": "alerts",
            "does": "Officers and couriers notified"
          },
          {
            "block": "dash",
            "does": "Live map of geofences, heat and deliveries"
          }
        ],
        "story": "Mid-July brings the first heat wave. The red alert arrives two days ahead and heat mode switches on by itself. Chiara and the local police get a real-time alert, VeloCargo reroutes its vans, and their delivery data arrive back through the Mobility Data Space. Each week KPI Manager compares the streets with the baseline, and the dashboard shows fewer vans at the hottest hours.",
        "also": [
          {
            "block": "kpim",
            "does": "Weekly comparison with the baseline"
          },
          {
            "block": "ds_mob",
            "does": "Courier delivery data received"
          }
        ]
      },
      {
        "code": "UJ S8",
        "loop": "Monitoring",
        "title": "Better next summer – and elsewhere",
        "summary": "With −34% delivery congestion and −1.2 °C at street level, the Lab adds two shaded squares and shares the model with a replication city.",
        "flow": [
          {
            "block": "kpim",
            "does": "Results against baseline and targets"
          },
          {
            "block": "ldt",
            "does": "Two more shaded squares tested in 3D"
          },
          {
            "block": "epart",
            "does": "Mitigation plan approved"
          },
          {
            "block": "dcat",
            "does": "DCAT-AP metadata (Idra)"
          },
          {
            "block": "x_ex",
            "does": "Data and rules exchanged"
          },
          {
            "block": "ds_mob",
            "does": "Offer to the replication city"
          }
        ],
        "story": "After the summer, KPI Manager shows 34% less delivery congestion and streets 1.2 °C cooler. Chiara tests two more shaded squares in the Digital Twin and the Living Lab approves them in e-Participation; the alert thresholds are tuned in Climate & Heat Alerts. Valdarena describes its datasets with DCAT-AP and shares data and rules with a replication city through the Mobility Data Space.",
        "also": [
          {
            "block": "clim_alert",
            "does": "Alert thresholds tuned"
          }
        ]
      }
    ]
  }
}
