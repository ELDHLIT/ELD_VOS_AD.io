define({ "api": [
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Update ASI Port",
    "version": "4.2.0",
    "group": "ASI_Port",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asiPort.id",
            "description": "<p>Unique String field – Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asiPort.tag",
            "description": "<p>asiPort</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asiPort.parentId",
            "description": "<p>String field linked to the Parent node/object (card) – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asiPort.parentTag",
            "description": "<p>card – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asiPort.action",
            "description": "<p>update/delete/get</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "asiPort.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asiPort.parameters.description",
            "description": "<p>Alphanumeric field  (e.g. (ASI Port 1, etc)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "asiPort.parameters.port",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "asiPort.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "asiPort.parameters.general.enable",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asiPort.parameters.general.direction",
            "description": "<p>In (D) / Out</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "asiPort.parameters.general.inSettings",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "asiPort.parameters.general.inSettings.deJittering",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asiPort.parameters.general.inSettings.deJittering.mode",
            "description": "<p>Based on PCR (D) / Based on Bitrate</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "asiPort.parameters.general.inSettings.deJittering.latency",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "asiPort.parameters.general.inSettings.externalStatmux",
            "description": "<p>Boolean</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "asiPort.parameters.general.outSettings",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "asiPort.parameters.general.outSettings.bitrate",
            "description": "<p>(Mbps)  Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asiPort.parameters.general.outSettings.outputPacketSize",
            "description": "<p>188 (D) / 204</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "asiPort.parameters.general.outSettings.shutdownInpMiss",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Numeric",
            "optional": false,
            "field": "asiPort.parameters.general.outSettings.shutdownStabilization",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asiPort.parameters.general.outSettings.transmittionMode",
            "description": "<p>Spread (D) / Burst</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "asiPort.parameters.general.outSettings.mpegTSid",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "asiPort.parameters.general.outSettings.networkId",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "asiPort.parameters.general.outSettings.mirrorTs.mirrorsIdsList",
            "description": "<p>Read-only List of destinations (“Physical object Ids”) of the Mirrors TS(s)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "asiPort.parameters.general.outSettings.mirrorTs.mirrorForceClear",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "asiPort.parameters.general.outSettings.mirrorTs.mirrorIdentical",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asiPort.parameters.general.outSettings.mirrorTs.mirrorOfId",
            "description": "<p>String field which will be used to link to the Master Socket object</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "asiPort.parameters.general.outSettings.mirrorTs",
            "description": "<p>Applicable for Mirror TS</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - update asiPort",
          "content": "{   \n \"tag\": \"asiPort\",\n \"action\": \"update\",\n \"id\": \"31002\",\n \"parameters\": {\n   \"description\": \"\",\n   \"general\": {\n     \"enable\": false,\n     \"direction\": \"In\",\n     \"inSettings\": {\n       \"deJittering\": {\n         \"mode\": \"Based on PCR\",\n         \"latency\": 500,\n         \"externalStatmux\": false\n       }\n     }\n   }\n }\n}  \nExample #2\n{   \n \"tag\": \"asiPort\",\n \"action\": \"update\",\n \"id\": \"31001\",\n \"parameters\": {\n \"description\": \"Test\",\n \"general\": {\n     \"enable\": true,\n     \"direction\": \"Out\",\n     \"outSettings\": {\n        \"bitrate\": 212000000,\n        \"outputPacketSize\": \"188\",\n         \"shutdownInpMiss\": true,\n         \"shutdownStabilization\": 20,\n         \"transmittionMode\": \"Spread\"\n       }\n     }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "ASI_Port",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/restapi/v4/active-alarms",
    "title": "get Active Alarms",
    "version": "4.2.0",
    "group": "Active_Alarms",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "severity",
            "description": "<p>true for severity field in result</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "recovery",
            "description": "<p>true for recoveryTip field in result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Examples - url",
          "content": "[ip]/restapi/v4/active-alarms\n[ip]/restapi/v4/active-alarms?severity=true\n[ip]/restapi/v4/active-alarms?recovery=true\n[ip]/restapi/v4/active-alarms?severity=true&recovery=true",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assertTime",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "objectId",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "severity",
            "description": "<p>optional by query (e.g. restapi/v4/active-alarms?severity=true)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recoveryTip",
            "description": "<p>optional by query (e.g. restapi/v4/active-alarms?recovery=true)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response example",
          "content": " [\n {\n   \"tag\": \"Platform\",\n   \"assertTime\": \"03/28/2022 14:44:54\",\n   \"objectId\": \"1\",\n   \"description\": \"Power Supply 2 Not Operational\",\n   \"severity\": \"4\",\n   \"recoveryTip\": \"Check the power /power cable /power supply unit for slot 2.\"\n },\n {\n   \"tag\": \"GbeInAP\",\n   \"assertTime\": \"03/28/2022 14:45:13\",\n   \"objectId\": \"440001\",\n   \"description\": \"GbE Socket Failed - [127.0.0.1:2000]\",\n   \"severity\": \"4\",\n   \"recoveryTip\": \"Check the GbE input for link and activity. Check that the IP and UDP are flowing to the port. Check that the IP and UDP have not created a conflict with other sockets (same 32 lower bits).\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Active_Alarms",
    "name": "GetRestapiV4ActiveAlarms",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/active-alarms"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Alias Port",
    "version": "4.2.0",
    "name": "Alias_Port",
    "group": "Alias_Port",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alias.id",
            "description": "<p>Unique String field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alias.tag",
            "description": "<p>alias</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"ipPort\""
            ],
            "optional": false,
            "field": "alias.parentTag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alias.parentId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"create\"",
              "\"get\"",
              "\"update\"",
              "\"delete\""
            ],
            "optional": false,
            "field": "alias.action",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "alias.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "alias.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "alias.parameters.general.index",
            "description": "<p>Alias Port index</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alias.parameters.general.proto",
            "description": "<p>Alias Port IP version IPv4 (D) / IPv6</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alias.parameters.general.addr",
            "description": "<p>Alias Port IP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alias.parameters.general.gw",
            "description": "<p>Alias Port gateway</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alias.parameters.general.mask",
            "description": "<p>Alias Port mask</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Create Alias Port",
          "content": "{\n    \"tag\": \"alias\",\n    \"action\": \"create\",\n    \"parentTag\": \"ipPort\",\n    \"parentId\": \"34005\",\n    \"parameters\": {\n        \"general\": {\n          \"proto\": \"IPv4\",\n          \"addr\": \"120.10.10.10\",\n          \"gw\": \"120.10.10.1\",\n          \"mask\": \"255.255.255.0\"\n        }\n    }\n}",
          "type": "json"
        },
        {
          "title": "Update Alias Port",
          "content": "{\n    \"tag\": \"alias\",\n    \"id\": \"1000209632\",\n    \"action\": \"update\",\n    \"parameters\": {\n        \"general\": {\n          \"proto\": \"IPv6\",\n          \"addr\": \"a::b\",\n          \"gw\": \"a::1\",\n          \"prefix\": 64\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Alias_Port",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Alias Route",
    "version": "4.2.0",
    "name": "Alias_Route",
    "group": "Alias_Route",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "aliasRoute.id",
            "description": "<p>Unique String field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "aliasRoute.tag",
            "description": "<p>aliasRoute</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"alias\""
            ],
            "optional": false,
            "field": "aliasRoute.parentTag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "aliasRoute.parentId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"create\"",
              "\"get\"",
              "\"update\"",
              "\"delete\""
            ],
            "optional": false,
            "field": "aliasRoute.action",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "aliasRoute.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "aliasRoute.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "aliasRoute.parameters.general.proto",
            "description": "<p>Alias Route IP version IPv4 (D) / IPv6</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "aliasRoute.parameters.general.addr",
            "description": "<p>Alias Route IP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "aliasRoute.parameters.general.gw",
            "description": "<p>Alias Route gateway</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "aliasRoute.parameters.general.mask",
            "description": "<p>Alias Route mask</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Create Alias Route",
          "content": "{\n    \"tag\": \"aliasRoute\",\n    \"action\": \"create\",\n    \"parentTag\": \"alias\",\n    \"parentId\": \"1000209633\",\n    \"parameters\": {\n        \"general\": {\n          \"addr\": \"9.10.11.12\",\n          \"gw\": \"9.10.11.1\",\n          \"mask\": \"255.255.255.0\"\n        }\n      }\n}",
          "type": "json"
        },
        {
          "title": "Update Alias Route",
          "content": "{\n    \"tag\": \"aliasRoute\",\n    \"action\": \"update\",\n    \"id\": \"1000212632\",\n    \"parameters\": {\n        \"general\": {\n          \"addr\": \"9.10.12.12\",\n          \"gw\": \"9.10.12.1\",\n          \"mask\": \"255.255.255.1\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Alias_Route",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/assets",
    "title": "Asset Upload",
    "version": "4.2.0",
    "group": "Asset",
    "success": {
      "fields": {
        "Response Example - Created 201": [
          {
            "group": "Response Example - Created 201",
            "type": "String",
            "optional": false,
            "field": "Object",
            "description": "<p>IDs of created asset objects</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request Example - upload single Asset",
          "content": "curl -X POST http://IP_ADDRESS/restapi/v4/assets -u \"USER:PASSWORD\" -F 'file=@file1.ts'",
          "type": "curl"
        },
        {
          "title": "Request Example - upload multiple Assets",
          "content": "curl -X POST http://IP_ADDRESS/restapi/v4/assets -u \"USER:PASSWORD\" -F 'file=@file1.ts' -F 'file=@file2.ts'",
          "type": "curl"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Asset",
    "name": "PostRestapiV4Assets",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/assets"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Asset Update",
    "version": "4.2.0",
    "group": "Asset",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asset.id",
            "description": "<p>Unique String field - Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asset.tag",
            "description": "<p>asset</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asset.action",
            "description": "<p>update/delete/get</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "asset.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "asset.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asset.parameters.general.description",
            "description": "<p>Alphanumeric field (e.g. &quot;psipstream.ts etc&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asset.parameters.general.name",
            "description": "<p>Alphanumeric field READ ONLY (this is the actual name of the file on the file system, e.g. &quot;psipstream.ts&quot;)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - update Asset",
          "content": "{   \n   \"tag\": \"asset\",\n   \"action\": \"update\",\n   \"id\": \"90101\",\n   \"parameters\": {\n       \"general\": {\n           \"description\": \"fileDescription.ts\"\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Asset",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Get Assets",
    "version": "4.2.0",
    "group": "Assets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "assets.id",
            "description": "<p>Unique String field - Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "assets.tag",
            "description": "<p>assets</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "get"
            ],
            "optional": false,
            "field": "assets.action",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assets.id",
            "description": "<p>Unique String field</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assets.tag",
            "description": "<p>assets</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assets.action",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assets.parentTag",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assets.parentId",
            "description": "<p>String field linked to the Parent node/object (platform)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assets.parameters",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assets.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "assets.parameters.general.availableSpace",
            "description": "<p>Numeric field (e.g. 873029.5)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "assets.parameters.general.usedSpace",
            "description": "<p>Numeric field (e.g. 16160.05)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assets.parameters.general.usedSpacePercent",
            "description": "<p>Alphanumeric field (e.g. &quot;2%&quot;)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - get assets",
          "content": "{   \n   \"tag\": \"assets\",\n   \"action\": \"get\",\n   \"id\": \"90001\",\n   \"parentTag\": \"platform\",\n   \"parentId\": \"1\",\n   \"parameters\": {\n       \"general\": {\n           \"avaialbleSpace\": 873012.95,\n           \"usedSpace\": 16176.6,\n           \"usedSpacePercent\": \"2%\"\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Assets",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "CAS Get/Update",
    "version": "4.2.0",
    "group": "CAS",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cas.id",
            "description": "<p>Unique String field - Relevant for update/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cas.tag",
            "description": "<p>cas</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cas.parentId",
            "description": "<p>String field linked to the Parent node/object (pltaform) – Relevant for get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cas.parentTag",
            "description": "<p>get only</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cas.action",
            "description": "<p>get/update</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "cas.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "cas.parameters.general",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cas.parameters.general.scramblingMode",
            "description": "<p>None / DVB CSA v1 / DVB CSA v2 with CW Conformance (D)/ DVB CSA v2 without CW Conformance / DVB CSA v3 / AES CBC / AES CBC - T / AES ECB / AES ECB - T / P-code</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "cas.parameters.general.autoCreateScrDescriptor",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "cas.parameters.general.bit54",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cas.parameters.general.cpDuration",
            "description": "<p>(Default:15)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cas.parameters.general.selectiveEncryption",
            "description": "<p>None (D) / All Streams / Video Streams Only</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cas.parameters.general.scramblingBitForSmallPayload",
            "description": "<p>Clear (D) / Scrambled - Applicable when &quot;scramblingMode&quot; is DVB CSA v1, or DVB CSA v2 with CW Conformance, or DVB CSA v2 without CW Conformance</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "cas.parameters.general.partialEncryption",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "cas.parameters.general.ecmgFailureProtection",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "cas.parameters.general.ehp",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "cas.parameters.p-code",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "cas.parameters.p-code.encryption",
            "description": "<p>true / false (D)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cas.parameters.p-code.ipAddress",
            "description": "<p>IP address format of IPv4 - (D: 0.0.0.0)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cas.parameters.p-code.serverPort",
            "description": "<p>Numeric field - (D:1234)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cas.parameters.p-code.interfaceId",
            "description": "<p>GbE port object id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cas.parameters.p-code.gatewayIpAddress",
            "description": "<p>IP address format of IPv4 - (D: 0.0.0.0)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cas.parameters.p-code.password",
            "description": "<p>String filed (D: Empty - length 0 - 30)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "cas.parameters.scsEis",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cas.parameters.scsEis.tcpPort",
            "description": "<p>Numeric field - (D:11000)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "cas.parameters.scsEis.autoExternalEcmGenerate",
            "description": "<p>true (D)/ false</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "cas.parameters.scsEis.eisRouting",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cas.parameters.scsEis.eisRouting.interfaceId",
            "description": "<p>(GbE Port Object ID)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cas.parameters.scsEis.eisRouting.ipVer",
            "description": "<p>IPv4  (D) / IPv6</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "cas.parameters.scsEis.eisRouting.iPv4Settings",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cas.parameters.scsEis.eisRouting.iPv4Settings.ipMask",
            "description": "<p>Mask address format of IPv4 (D:255.255.255.0)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cas.parameters.scsEis.eisRouting.iPv4Settings.ipAddress",
            "description": "<p>IP address format of IPv4 - (D: 0.0.0.0)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "cas.parameters.scsEis.eisRouting.iPv6Settings",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cas.parameters.scsEis.eisRouting.iPv6Settings.ipMask",
            "description": "<p>Mask address format of IPv6 (D: 64)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cas.parameters.scsEis.eisRouting.iPv6Settings.ipAddress",
            "description": "<p>IP address format of IPv6 - (D: ::)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "cas.parameters.ecmg",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cas.parameters.ecmg.channelTestRetries",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "cas.parameters.psig",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cas.parameters.psig.channelTestRetries",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "cas.parameters.psig.enable",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "cas.parameters.psig.persistance",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cas.parameters.psig.controlVia",
            "description": "<p>Management Network (D) / CAS Network</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "cas.parameters.vodTierBasedEncryption",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "cas.parameters.vodTierBasedEncryption.vodTierBasedEncryption",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "cas.parameters.vodTierBasedEncryption.ecmGroup",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cas.parameters.vodTierBasedEncryption.ecmGroup.ecmId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cas.parameters.vodTierBasedEncryption.ecmGroup.superCasId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cas.parameters.vodTierBasedEncryption.ecmGroup.accessCriteria",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cas.parameters.vodTierBasedEncryption.ecmGroup.ecmPidS",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - get cas",
          "content": "{\n\"id\": \"10101\",\n\"tag\": \"cas\",\n\"action\": \"get\",\n\"parentTag\": \"platform\",\n\"parentId\": \"1\",\n\"parameters\": {\n \"general\": {\n   \"scramblingMode\": \"DVB CSA v2 with CW Conformance\",\n   \"autoCreateScrDescriptor\": true,\n   \"bit54\": false,\n   \"cpDuration\": 15,\n   \"selectiveEncryption\": \"None\",\n   \"scramblingBitForSmallPayload\": \"Clear\",\n   \"partialEncryption\": false,\n   \"ecmgFailureProtection\": false,\n   \"ehp\": false\n },\n \"p-code\": {\n   \"interfaceId\": \"-1\",\n   \"gatewayIpAddress\": \"0.0.0.1\",\n   \"ipAddress\": \"0.0.0.0\",\n   \"serverPort\": 1234,\n   \"password\": \"\",\n   \"encryption\": false\n },\n \"scsEis\": {\n   \"tcpPort\": 11000,\n   \"autoExternalEcmGenerate\": true,\n   \"eisRouting\": [\n     {\n       \"ipVer\": \"IPv4\",\n       \"iPv4Settings\": {\n         \"ipMask\": \"255.255.255.0\",\n         \"ipAddress\": \"0.0.0.0\"\n       }\n     },\n     {\n       \"ipVer\": \"IPv4\",\n       \"iPv4Settings\": {\n         \"ipMask\": \"255.255.255.0\",\n         \"ipAddress\": \"0.0.0.0\"\n       }\n     }\n   ]\n },\n \"ecmg\": {\n   \"channelTestRetries\": 3\n },\n \"psig\": {\n   \"channelTestRetries\": 0,\n   \"controlVia\": \"Management Network\",\n   \"enable\": true,\n   \"persistance\": false\n },\n \"vodTierBasedEncryption\": {\n   \"vodTierBasedEncryption\": true,\n   \"ecmGroup\": [\n     {\n       \"ecmId\": \"0x200\",\n       \"superCasId\": \"0x10000\",\n       \"accessCriteria\": \"0x01\",\n       \"ecmPid\": \"0x3e8\"\n     }\n   ]\n }\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "CAS",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Update Card",
    "version": "4.2.0",
    "group": "Card",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card.id",
            "description": "<p>Unique String field - Relevant for update/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card.tag",
            "description": "<p>card</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card.action",
            "description": "<p>update/get</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "card.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card.parameters.cardType",
            "description": "<p>Main, Iom, Quad10G, Dual10G, OctalASI, None (D) - (applicable for PCIe cards only)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card.parameters.vendor",
            "description": "<p>Alphanumeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card.parameters.partNumber",
            "description": "<p>Alphanumeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card.parameters.serialNumber",
            "description": "<p>Alphanumeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card.parameters.firmware",
            "description": "<p>Alphanumeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "card.parameters.portRedundancy1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Off\"",
              "\"Hot-Standby\"",
              "\"Dual\"",
              "\"Teaming\""
            ],
            "optional": false,
            "field": "card.parameters.portRedundancy1.mode",
            "description": "<p><b>Note:</b> Teaming redundancy mode is service affecting as application restarts</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Manual\"",
              "\"Manual Revert\"",
              "\"Automatic\"",
              "\"Automatic Revert\""
            ],
            "optional": false,
            "field": "card.parameters.portRedundancy1.scheme",
            "description": "<p>Applicable when Mode: Hot-Standby</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Primary\"",
              "\"Backup\""
            ],
            "optional": false,
            "field": "card.parameters.portRedundancy1.activePort",
            "description": "<p>Applicable when Scheme: Manual</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "card.parameters.portRedundancy2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Off\"",
              "\"Hot-Standby\"",
              "\"Dual\"",
              "\"Teaming\""
            ],
            "optional": false,
            "field": "card.parameters.portRedundancy2.mode",
            "description": "<p><b>Note:</b> Teaming redundancy mode is service affecting as application restarts</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Manual\"",
              "\"Manual Revert\"",
              "\"Automatic\"",
              "\"Automatic Revert\""
            ],
            "optional": false,
            "field": "card.parameters.portRedundancy2.scheme",
            "description": "<p>Applicable when Mode: Hot-Standby</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Primary\"",
              "\"Backup\""
            ],
            "optional": false,
            "field": "card.parameters.portRedundancy2.activePort",
            "description": "<p>Applicable when Scheme: Manual</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - update card",
          "content": "{   \n \"tag\": \"card\",\n \"action\":\"update\",\n \"id\": \"1000000151\",\n  \"parameters\": {\n   \"portRedundancy1\": {\n     \"mode\": \"Hot-Standby\",\n     \"scheme\": \"Manual\",\n     \"activePort\": \"Primary\"\n   },\n   \"portRedundancy2\": {\n     \"mode\": \"Hot-Standby\",\n     \"scheme\": \"Manual\",\n     \"activePort\": \"Primary\"\n   }\n }\n}  \nExample #2\n{   \n \"tag\": \"card\",\n \"action\":\"update\",\n \"id\": \"1000000151\",\n \"parameters\": {\n   \"portRedundancy1\": {\n     \"mode\": \"Hot-Standby\",\n     \"scheme\": \"Automatic Revert\"\n   },\n   \"portRedundancy2\": {\n     \"mode\": \"Hot-Standby\",\n     \"scheme\": \"Automatic Revert\"\n   }\n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Card",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/configuration",
    "title": "View/Backup/Restore Configuration",
    "version": "4.2.0",
    "group": "Configuration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "configuration.download",
            "description": "<p>Download configuration file</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "configuration.restoreFromFile",
            "description": "<p>Restore configuration from file.<br/>Request should include a file.<br/>This action will restart application</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Restore config",
          "content": "curl -X POST http://IP_ADDRESS/restapi/v4/configuration?restoreFromFile --header \"Authorization: Basic <auth sequence>\" -F 'file=@<path to xml config file>'",
          "type": "curl"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "View Configuration",
          "content": "http://IP_ADDRESS/restapi/v4/configuration\n<AFRICA Time=\"06/15/2022 19:36:12\" XmlVersion=\"0000000005\" ActualAuthMode=\"0\" SuccessApply=\"1\">\n...\n</AFRICA>",
          "type": "json"
        },
        {
          "title": "Backup Configuration",
          "content": "http://IP_ADDRESS/restapi/v4/configuration?download\ndownload dialog should appear for config file",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Configuration",
    "name": "PostRestapiV4Configuration",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/configuration"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Update Output Device Redundancy",
    "version": "4.2.0",
    "group": "Device_Redundancy",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceRedundancy.id",
            "description": "<p>Unique String field - Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceRedundancy.tag",
            "description": "<p>deviceRedundancy</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceRedundancy.parentId",
            "description": "<p>String field linked to the Parent node/object (platform) – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceRedundancy.parentTag",
            "description": "<p>platform Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceRedundancy.action",
            "description": "<p>update/get</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "deviceRedundancy.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "deviceRedundancy.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceRedundancy.parameters.general.redundancyScheme",
            "description": "<p>Manual (D) / Automatic - Cluster</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceRedundancy.parameters.general.deviceRole",
            "description": "<p>Primary (D) / Warm Backup / Hot Backup – Applicable when redundancyScheme: Manual</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "deviceRedundancy.parameters.general.groupId",
            "description": "<p>Numeric field (Decimal values) - (D:0)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "deviceRedundancy.parameters.general.resync",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "deviceRedundancy.parameters.general.switchOver",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "deviceRedundancy.parameters.groupStatusList",
            "description": "<p>List</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceRedundancy.parameters.groupStatusList.redundancyScheme",
            "description": "<p>Alphanumeric field (e.g. &quot;Primary&quot;, &quot;Automatic - cluster&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceRedundancy.parameters.groupStatusList.deviceRole",
            "description": "<p>Alphanumeric field (e.g. None, Primary, Backup)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceRedundancy.parameters.groupStatusList.status",
            "description": "<p>Alphanumeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceRedundancy.parameters.groupStatusList.ip",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceRedundancy.parameters.groupStatusList.name",
            "description": "<p>Alphanumeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceRedundancy.parameters.groupStatusList.mac",
            "description": "<p>Alphanumeric field (MAC format)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceRedundancy.parameters.groupStatusList.state",
            "description": "<p>Alphanumeric field (e.g. Active)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "deviceRedundancy.parameters.hhpV2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "deviceRedundancy.parameters.hhpV2.enableIpV4",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceRedundancy.parameters.hhpV2.multicastAddrV4",
            "description": "<p>IP address format (IPv4) - (D: &quot;225.0.0.1&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "deviceRedundancy.parameters.hhpV2.udpPortV4",
            "description": "<p>Numeric field (Decimal values) - (D: &quot;12345&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "deviceRedundancy.parameters.hhpV2.enableIpV6",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceRedundancy.parameters.hhpV2.multicastAddrV6",
            "description": "<p>IP address format (IPv6) (D: &quot;::&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "deviceRedundancy.parameters.hhpV2.udpPortV6",
            "description": "<p>Numeric field (Decimal values) - (D: &quot;12345&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "deviceRedundancy.parameters.hhpV2.hhpEnableList",
            "description": "<p>List</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceRedundancy.parameters.hhpV2.hhpEnableList.gbePortId",
            "description": "<p>Alphanumeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "deviceRedundancy.parameters.hhpV2.hhpEnableList.hhpEnable",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "deviceRedundancy.parameters.cas",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "deviceRedundancy.parameters.cas.ecmgChannelIdOffset",
            "description": "<p>Numeric field (Decimal values) - (D: &quot;12345&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "deviceRedundancy.parameters.cas.enableCwSync",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceRedundancy.parameters.cas.cwSyncIpVersion",
            "description": "<p>IPv4  (D) / IPv6</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceRedundancy.parameters.cas.cwSyncIfcId",
            "description": "<p>Alphanumeric field (D: Default)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "deviceRedundancy.parameters.cas.cwSiteSyncEnabled",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "deviceRedundancy.parameters.cas.masterSiteforCwSync",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "deviceRedundancy.parameters.cas.serverPortCwSiteSync",
            "description": "<p>Numeric field (Decimal values) - (D: &quot;40000&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceRedundancy.parameters.cas.otherSiteMemberA",
            "description": "<p>IP address format (IPv4) - (D: &quot;0.0.0.0&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceRedundancy.parameters.cas.otherSiteMemberB",
            "description": "<p>IP address format (IPv4) - (D: &quot;0.0.0.0&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "deviceRedundancy.parameters.confSync",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "deviceRedundancy.parameters.confSync.allPortIPs",
            "description": "<p>true (D) / false</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "deviceRedundancy.parameters.confSync.systemNameLocationAndContact",
            "description": "<p>true (D) / false</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "deviceRedundancy.parameters.confSync.ptp",
            "description": "<p>false (D) / true</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - update deviceRedundancy",
          "content": "{\n \"tag\": \"deviceRedundancy\",\n \"action\": \"update\",\n \"id\": \"30050001\",\n \"parentTag\": \"platform\",\n \"parentId\": \"1\",\n \"parameters\": {\n   \"general\": {\n     \"redundancyScheme\": \"Manual\",\n     \"deviceRole\": \"Primary\",\n     \"groupId\": 16\n   },\n   \"hhpV2\": {\n     \"enableIpV4\": true,\n     \"multicastAddrV4\": \"225.0.0.1\",\n     \"udpPortV4\": 12347,\n     \"enableIpV6\": true,\n     \"multicastAddrV6\": \"ff08::2\",\n    \"udpPortV6\": 12346,\n     \"hhpEnableList\": [\n       {\n         \"gbePortId\": \"34001\",\n         \"hhpEnable\": true\n       },\n       {\n         \"gbePortId\": \"34002\",\n         \"hhpEnable\": true\n       },\n       {\n         \"gbePortId\": \"34003\",\n         \"hhpEnable\": false\n       },\n       {\n         \"gbePortId\": \"34004\",\n         \"hhpEnable\": true\n       },\n       {\n         \"gbePortId\": \"34005\",\n         \"hhpEnable\": false\n       },\n       {\n         \"gbePortId\": \"34006\",\n         \"hhpEnable\": true\n       },\n       {\n         \"gbePortId\": \"34007\",\n         \"hhpEnable\": false\n       }\n     ]\n   },\n   \"cas\": {\n     \"ecmgChannelIdOffset\": 105,\n     \"enableCwSync\": true,\n     \"cwSyncIpVersion\": \"IPv6\",\n     \"cwSyncIfcId\": \"34003\",\n     \"cwSiteSyncEnabled\": true,\n     \"masterSiteforCwSync\": true,\n     \"serverPortCwSiteSync\": 40002,\n     \"otherSiteMemberA\": \"1.0.0.1\",\n     \"otherSiteMemberB\": \"2.0.0.2\"\n   },\n   \"confSync\": {\n     \"ptp\": true\n   }\n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Device_Redundancy",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/drag-pids",
    "title": "Drag PIDs from input to output TS / Service",
    "version": "4.2.0",
    "group": "Drag_PIDs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outputTsId",
            "description": "<p>output TS object ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outputServiceId",
            "description": "<p>output Service object ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "inputPidsIds",
            "description": "<p>input PIDs objects IDs</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Drag PID to output Service Request Example ",
          "content": "\n[IP]/restapi/v4/drag-pids\n\nbody:\n\n{\n  \"outputServiceId\":\"5300001\",\n  \"inputPidsIds\":[\"10090145\",\"10090148\"]\n}",
          "type": "json"
        },
        {
          "title": "Drag PID to output TS Request Example ",
          "content": "\n[IP]/restapi/v4/drag-pids\n\nbody:\n\n{\n  \"outputTsId\":\"5000001\",\n  \"inputPidsIds\":[\"10090145\",\"10090148\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response Example - Created 200": [
          {
            "group": "Response Example - Created 200",
            "type": "String[]",
            "optional": false,
            "field": "Objects",
            "description": "<p>IDs of created output PIDs</p>"
          }
        ]
      }
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Drag_PIDs",
    "name": "PostRestapiV4DragPids",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/drag-pids"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/drag-services",
    "title": "Drag services (programs) from input TS to output TS",
    "version": "4.2.0",
    "group": "Drag_Services",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outputTsId",
            "description": "<p>output TS object ID<br/><b>Note:</b> If dragged service ID or PID is already taken a new number, starting from 100, will be auto allocated instead.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "inputServicesIds",
            "description": "<p>input services objects IDs</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "programMode",
            "description": "<p>true for RSS mode, false (D) for services with PIDs</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example ",
          "content": "\n[IP]/restapi/v4/drag-services\n\nbody:\n\n{\n   \"outputTsId\":\"5000001\",\n   \"inputServicesIds\":[\"520001\",\"520002\"],\n   \"programMode\":true\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response Example - Created 200": [
          {
            "group": "Response Example - Created 200",
            "type": "String[]",
            "optional": false,
            "field": "Objects",
            "description": "<p>IDs of created output services</p>"
          }
        ]
      }
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Drag_Services",
    "name": "PostRestapiV4DragServices",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/drag-services"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/drag-ts",
    "title": "Drag input TS to output TS",
    "version": "4.2.0",
    "group": "Drag_TS",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outputTsId",
            "description": "<p>output TS object ID<br/><b>Note:</b> If dragged service ID or PID is already taken a new number, starting from 100, will be auto allocated instead.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inputTsId",
            "description": "<p>input TS object ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "programMode",
            "description": "<p>true for RSS mode, false (D) for services with PIDs</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example ",
          "content": "\n[IP]/restapi/v4/drag-ts\n\nbody:\n\n{\n   \"outputTsId\":\"5000001\",\n   \"inputTsId\":\"400001\",\n   \"programMode\": true\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response Example - Created 200": [
          {
            "group": "Response Example - Created 200",
            "type": "String[]",
            "optional": false,
            "field": "Objects",
            "description": "<p>IDs of created output services</p>"
          }
        ]
      }
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Drag_TS",
    "name": "PostRestapiV4DragTs",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/drag-ts"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "EAS",
    "version": "4.2.0",
    "name": "EAS",
    "group": "EAS",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eas.id",
            "description": "<p>Unique String field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eas.tag",
            "description": "<p>eas</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"get\"",
              "\"update\""
            ],
            "optional": false,
            "field": "eas.action",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "eas.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "eas.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"None\"",
              "\"Proprietary\"",
              "\"SCTE-18\""
            ],
            "optional": false,
            "field": "eas.parameters.general.mode",
            "description": "<p>EAS mode</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "eas.parameters.proprietaryProperties",
            "description": "<p>relevant only for Proprietary mode</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eas.parameters.proprietaryProperties.ipAddress",
            "description": "<p>ipv4</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "eas.parameters.proprietaryProperties.udpPort",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "eas.parameters.proprietaryProperties.siteId",
            "description": "<p>Allowed range: [0-65535]</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "eas.parameters.proprietaryProperties.groupId",
            "description": "<p>Allowed range: [0-65535]</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "eas.parameters.proprietaryProperties.ssmList",
            "description": "<p>Array of up to 4 SSM</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "eas.parameters.scte18Properties",
            "description": "<p>relevant only for SCTE-18 mode</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eas.parameters.scte18Properties.srcTs",
            "description": "<p>Physical ID of source transport</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "eas.parameters.scte18Properties.alertPriorityThreshold",
            "description": "<p>Allowed range: [1-15]</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "eas.parameters.scte18Properties.maskEasAlarms",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "eas.parameters.scte18Properties.enableTestMessages",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Update SCTE-18",
          "content": "{\n    \"tag\": \"eas\",\n    \"action\": \"update\",\n    \"id\": \"50\",\n    \"parameters\": {\n      \"general\": {\n        \"mode\": \"SCTE-18\"\n      },\n      \"scte18Properties\": {\n        \"srcTs\": \"4000003\",\n        \"alertPriorityThreshold\": 5,\n        \"maskEasAlarms\": true,\n        \"enableTestMessages\": true,\n      }\n    }\n}",
          "type": "json"
        },
        {
          "title": "Update Proprietary",
          "content": "{\n    \"tag\": \"eas\",\n    \"action\": \"update\",\n    \"id\": \"50\",\n    \"parameters\": {\n      \"general\": {\n        \"mode\": \"Proprietary\"\n      },\n      \"proprietaryProperties\": {\n        \"ipAddress\": \"8.9.10.11\",\n        \"udpPort\": 555,\n        \"siteId\": 5,\n        \"groupId\": 5,\n        \"ssmList\": [\n          \"1.2.4.6\",\n          \"1.3.5.8\"\n        ]\n      }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "EAS",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "EmergencyChannel",
    "version": "4.2.0",
    "name": "EmergencyChannel",
    "group": "EAS",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emergencyChannel.id",
            "description": "<p>Unique String field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emergencyChannel.tag",
            "description": "<p>emergencyChannel</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"eas\""
            ],
            "optional": false,
            "field": "emergencyChannel.parentTag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emergencyChannel.parentId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"create\"",
              "\"get\"",
              "\"update\"",
              "\"delete\""
            ],
            "optional": false,
            "field": "emergencyChannel.action",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "emergencyChannel.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "emergencyChannel.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emergencyChannel.parameters.general.srcTs",
            "description": "<p>Physical ID of source transport</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "emergencyChannel.parameters.general.srcProgram",
            "description": "<p>Allowed values: [0-65535]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..32",
            "optional": false,
            "field": "emergencyChannel.parameters.general.description",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Create",
          "content": "{\n    \"tag\": \"emergencyChannel\",\n    \"action\": \"create\",\n    \"parentTag\": \"eas\",\n    \"parentId\": \"50\",\n    \"parameters\": {\n      \"general\": {\n        \"srcTs\": \"4000003\",\n        \"srcProgram\": 2,\n        \"description\": \"emergency channel description\"\n      }\n    }\n}",
          "type": "json"
        },
        {
          "title": "Update",
          "content": "{\n    \"tag\": \"emergencyChannel\",\n    \"action\": \"update\",\n    \"id\": \"51\",\n    \"parameters\": {\n      \"general\": {\n        \"srcTs\": \"4000003\",\n        \"srcProgram\": 2,\n        \"description\": \"emergency channel new description\"\n      }\n    }\n}",
          "type": "json"
        },
        {
          "title": "Delete",
          "content": "{\n    \"tag\": \"emergencyChannel\",\n    \"action\": \"delete\",\n    \"id\": \"51\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "EAS",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Create/Update ECMG",
    "version": "4.2.0",
    "group": "ECMG",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ecmg.id",
            "description": "<p>Unique String field Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ecmg.tag",
            "description": "<p>ecmg</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"10101\""
            ],
            "optional": false,
            "field": "ecmg.parentId",
            "description": "<p>String field linked to the Parent node/object (cas) Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"cas\""
            ],
            "optional": false,
            "field": "ecmg.parentTag",
            "description": "<p>Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ecmg.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "ecmg.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "ecmg.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ecmg.parameters.general.name",
            "description": "<p>Alphanumeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ecmg.parameters.general.overrideScrMode",
            "description": "<p>None (D) / DVB CSA v1 / DVB CSA v2 with CW Conformance / DVB CSA v2 without CW Conformance / DVB CSA v3 / AES CBC / AES CBC - T / AES ECB / AES ECB - T / P-code</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ecmg.parameters.general.priority",
            "description": "<p>Numeric field - (D:1, range: 1 - 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ecmg.parameters.general.superCasId",
            "description": "<p>superCasId - Hexadecimal String field (D: 0x10000)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ecmg.parameters.general.protocolRevision",
            "description": "<p>REV1 (D), REV2, REV3</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ecmg.parameters.general.interfaceId",
            "description": "<p>GbE port object id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ecmg.parameters.general.ipVer",
            "description": "<p>IPv4 (D) / IPv6</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ecmg.parameters.general.iPv4Settings.ipAddress",
            "description": "<p>IP address format of IPv4 - (D: 0.0.0.0)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ecmg.parameters.general.iPv4Settings.ipMask",
            "description": "<p>Mask address format of IPv4 (D:255.255.255.0)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ecmg.parameters.general.iPv6Settings.ipAddress",
            "description": "<p>IP address format of IPv6 - (D: ::)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ecmg.parameters.general.iPv6Settings.ipSubnetLen",
            "description": "<p>Mask address format of IPv6 (D: 64)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ecmg.parameters.general.tcpPort",
            "description": "<p>Numeric field - (D:1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ecmg.parameters.general.configurableChannelId",
            "description": "<p>Numeric field - (D:1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ecmg.parameters.general.actualChannelId",
            "description": "<p>Numeric field - (D:1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "ecmg.parameters.general.externalCW",
            "description": "<p>true / false (D)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ecmg.parameters.general.status",
            "description": "<p>Connected / Disconnected - Relevant for GET “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ecmg.parameters.general.numberStreams",
            "description": "<p>Numeric field - Relevant for GET “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "ecmg.parameters.general.iPv4Settings",
            "description": "<p>required if ipVer is IPv4</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "ecmg.parameters.general.iPv6Settings",
            "description": "<p>required if ipVer is IPv6</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - update ecmg",
          "content": "{   \n   \"tag\": \"ecmg\",\n   \"action\": \"update\",\n   \"id\": \"10111\",\n   \"parameters\": {\n       \"general\": {\n           \"name\": \"Ecmg updated\",\n           \"overrideScrMode\": \"DVB CSA v2 with CW Conformance\",\n           \"priority\": 15,\n           \"superCasId\": \"0xFEDCBA\",\n           \"protocolRevision\": \"REV3\",\n           \"interfaceId\": \"34005\",\n           \"ipVer\": \"IPv6\",\n           \"iPv6Settings\" : {\n               \"ipAddress\": \"2000::fa\",\n               \"ipSubnetLen\": 64\n           },\n           \"tcpPort\": 4321,\n           \"configurableChannelId\": 3,\n           \"externalCW\": false\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response Example - Created 201": [
          {
            "group": "Response Example - Created 201",
            "type": "String",
            "optional": false,
            "field": "Object",
            "description": "<p>ID of created ECMG object</p>"
          }
        ]
      }
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "ECMG",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Create/Update ECM",
    "version": "4.2.0",
    "group": "ECM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ecm.id",
            "description": "<p>Unique Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ecm.tag",
            "description": "<p>injectEcm</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ecm.parentId",
            "description": "<p>Linked to the Parent node/object (outTs) – Applicable for Unreferenced PIDs – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ecm.parentTag",
            "description": "<p>outTs – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ecm.action",
            "description": "<p>Create/Update/Delete/Get</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "ecm.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "ecm.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ecm.parameters.general.outPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ecm.parameters.general.ecmId",
            "description": "<p>Hexadecimal field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ecm.parameters.general.superCasId",
            "description": "<p>Hexadecimal String field - Field which will be used to link to the Super CAS ID of an existing ECMG</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ecm.parameters.general.privateDataHex",
            "description": "<p>Hexadecimal field - (D:blank, String length: 0 - 200 characters and length must be a multiple of 2 characters)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ecm.parameters.general.privateDataAscii",
            "description": "<p>Hexadecimal field - (D:blank, String length: 0 - 100 characters)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ecm.parameters.general.priority",
            "description": "<p>String field 'Priority 1' (D) (old mode name 'High') / 'Priority 2' ('Normal') / 'Priority 3' ('Medium') / 'Priority 4' ('Low') / 'Priority 5' / ... / 'Priority 12'</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "ecmg.parameters.general.manageTidIndependently",
            "description": "<p>true / false (D)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - create ecm",
          "content": "{\n   \"tag\": \"injectEcm\",\n   \"action\": \"create\",\n   \"parentTag\": \"outTs\",\n   \"parentId\": \"5000001\",\n   \"parameters\": {\n       \"general\": {\n           \"outPid\": 700,\n           \"ecmId\": \"0xAB\",\n           \"superCasId\": \"0x10000\",\n           \"privateDataHex\": \"0xABBA\",\n           \"priority\": \"Priority 2\",\n           \"manageTidIndependently\": true\n       }\n   }\n}",
          "type": "json"
        },
        {
          "title": "Request Example - update ecm",
          "content": "{\n   \"id\": \"70001\",\n   \"tag\": \"injectEcm\",\n   \"action\": \"update\",\n   \"parameters\": {\n       \"general\": {\n           \"outPid\": 324,\n           \"ecmId\": \"0xcdcd\",\n           \"superCasId\": \"0x10000\",\n           \"privateDataHex\": \"0xFEFE\",\n           \"priority\": \"Priority 4\",\n           \"manageTidIndependently\": false\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response Example - Created 201": [
          {
            "group": "Response Example - Created 201",
            "type": "String",
            "optional": false,
            "field": "Object",
            "description": "<p>ID of created ECM object</p>"
          }
        ]
      }
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "ECM",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Create/Update EMMG",
    "version": "4.2.0",
    "group": "EMMG",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emmg.id",
            "description": "<p>Unique String field Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emmg.tag",
            "description": "<p>emmg</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"10201\""
            ],
            "optional": false,
            "field": "emmg.parentId",
            "description": "<p>String field linked to the Parent node/object (cas) Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"emmgs\""
            ],
            "optional": false,
            "field": "emmg.parentTag",
            "description": "<p>Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emmg.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "emmg.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "emmg.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "emmg.parameters.general.controlTcpPort",
            "description": "<p>Numeric field - (D:1)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emmg.parameters.general.clientSuperCasId",
            "description": "<p>superCasId - Hexadecimal String field (D: 0x10000)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emmg.parameters.general.dataProtocol",
            "description": "<p>TCP (D) / UDP / Broadcast</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Section\"",
              "\"Packet\""
            ],
            "optional": false,
            "field": "emmg.parameters.general.dataFormat",
            "description": "<p>Applicable only for dataProtocol: Broadcast</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emmg.parameters.general.interfaceId",
            "description": "<p>GbE port object id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emmg.parameters.general.ipVer",
            "description": "<p>IPv4 (D) / IPv6</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emmg.parameters.general.iPv4Settings.ipAddress",
            "description": "<p>IP address format of IPv4 - (D: 0.0.0.0)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emmg.parameters.general.iPv4Settings.ipMask",
            "description": "<p>Mask address format of IPv4 (D:255.255.255.0)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emmg.parameters.general.iPv6Settings.ipAddress",
            "description": "<p>IP address format of IPv6 - (D: ::)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "emmg.parameters.general.iPv6Settings.ipSubnetLen",
            "description": "<p>Mask address format of IPv6 (D: 64)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "emmg.parameters.general.iPv4Settings",
            "description": "<p>required if ipVer is IPv4</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "emmg.parameters.general.iPv6Settings",
            "description": "<p>required if ipVer is IPv6</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - create emmg",
          "content": "{\n   \"tag\": \"emmg\",\n   \"action\": \"create\",\n   \"parentId\": \"10201\",\n   \"parentTag\": \"emmgs\",\n   \"parameters\": {\n       \"general\": {\n           \"controlTcpPort\":2000,\n           \"clientSuperCasId\":\"0x10000\",\n           \"dataProtocol\":\"TCP\",\n           \"interfaceId\":\"34002\",\n           \"ipVer\":\"IPv4\",\n           \"iPv4Settings\":{\n               \"ipAddress\":\"4.3.2.1\",\n               \"ipMask\":\"255.255.255.0\"\n           }\n       }\n   }\n}",
          "type": "json"
        },
        {
          "title": "Request Example - update emmg",
          "content": "{   \n   \"tag\": \"emmg\",\n   \"action\": \"update\",\n   \"id\": \"10211\",\n   \"parameters\": {\n       \"general\": {\n           \"controlTcpPort\":3022,\n           \"clientSuperCasId\":\"0xEDCBA\",\n           \"dataProtocol\":\"TCP\",\n           \"interfaceId\":\"34007\",\n           \"ipVer\":\"IPv4\",\n           \"iPv4Settings\":{\n               \"ipAddress\":\"4.3.2.1\",\n               \"ipMask\":\"255.255.255.0\"\n           },\n            \"status\": \"Connected\"\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response Example - Created 201": [
          {
            "group": "Response Example - Created 201",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Object ID of created EMMG object</p>"
          },
          {
            "group": "Response Example - Created 201",
            "type": "String",
            "allowedValues": [
              "\"Connected\"",
              "\"Disconnected\""
            ],
            "optional": false,
            "field": "status",
            "description": "<p>Connection status to emmg server</p>"
          }
        ]
      }
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "EMMG",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Create/Update EMM",
    "version": "4.2.0",
    "group": "EMM",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emm.id",
            "description": "<p>Unique Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emm.tag",
            "description": "<p>injectEmm</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emm.parentId",
            "description": "<p>Linked to the Parent node/object (outTs) – Applicable for Unreferenced PIDs – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emm.parentTag",
            "description": "<p>outTs – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emm.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "emm.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "emm.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "emm.parameters.general.outPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "emm.parameters.general.maxBitrate",
            "description": "<p>Decimal values - min 10, max 5120</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Unreferenced\"",
              "\"Referenced\""
            ],
            "optional": false,
            "field": "emm.parameters.general.emmInCat",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emm.parameters.general.emmDataId",
            "description": "<p>Hexadecimal value</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emm.parameters.general.clientSuperCasId",
            "description": "<p>Hexadecimal value - Field which will be used to link to the Primary CA Sytem ID of an existing EMMG</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emm.parameters.general.backupClientSuperCasId",
            "description": "<p>Hexadecimal value - Field which will be used to link to the Backup CA Sytem ID of an existing EMMG</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emm.parameters.general.privateDataHex",
            "description": "<p>Hexadecimal field - (D:blank, String length: 0 - 200 characters and length must be a multiple of 2 characters)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emm.parameters.general.privateDataAscii",
            "description": "<p>String field - (D:blank, String length: 0 - 100 characters)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emm.parameters.general.priority",
            "description": "<p>String field 'Priority 1' (D) (old mode name 'High') / 'Priority 2' ('Normal') / 'Priority 3' ('Medium') / 'Priority 4' ('Low') / 'Priority 5' / ... / 'Priority 12'</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "ecmg.parameters.general.manageTidIndependently",
            "description": "<p>true / false (D)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - create emm",
          "content": "{\n    \"tag\": \"injectEmm\",\n    \"action\": \"create\",\n    \"parentTag\": \"outTs\",\n    \"parentId\": \"5000001\",\n    \"parameters\": {\n        \"general\": {\n              \"outPid\":532,\n              \"maxBitrate\":100,\n              \"emmInCat\":\"Referenced\",\n              \"emmDataId\":\"0x15\",\n              \"clientSuperCasId\":\"0x10000\",\n              \"backupClientSuperCasId\":\"0x10000\",\n              \"privateDataHex\":\"0x61626364\",\n              \"privateDataAscii\":\"abcd\",\n              \"pidPriority\":\"Priority 1\"\n       }\n   }\n}",
          "type": "json"
        },
        {
          "title": "Request Example - update emm",
          "content": "{\n   \"id\": \"80001\",\n   \"tag\": \"injectEmm\",\n   \"action\": \"update\",\n   \"parameters\": {\n       \"general\": {\n              \"outPid\":832,\n              \"maxBitrate\":200,\n              \"emmInCat\":\"Referenced\",\n              \"emmDataId\":\"0x20\",\n              \"privateDataAscii\":\"dcba\",\n              \"pidPriority\":\"Priority 3\"\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response Example - Created 201": [
          {
            "group": "Response Example - Created 201",
            "type": "String",
            "optional": false,
            "field": "Object",
            "description": "<p>ID of created EMM object</p>"
          }
        ]
      }
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "EMM",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "EisRoute Get/Update",
    "version": "4.2.0",
    "group": "EisRoute",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eisRoute.id",
            "description": "<p>Unique String field - Relevant for update/get/delete “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eisRoute.tag",
            "description": "<p>eisRoute</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eisRoute.parentId",
            "description": "<p>String field linked to the Parent node/object (EisRoutes) – Relevant for create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"eisRoutes\""
            ],
            "optional": false,
            "field": "eisRoute.parentTag",
            "description": "<p>create only</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eisRoute.action",
            "description": "<p>get/create/update/delete</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eisRoute.interfaceId",
            "description": "<p>(GbE Port Object ID)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eisRoute.ipVer",
            "description": "<p>IPv4  (D) / IPv6</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "eisRoute.iPv4Settings",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eisRoute.iPv4Settings.ipMask",
            "description": "<p>Mask address format of IPv4 (D:255.255.255.0)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eisRoute.iPv4Settings.ipAddress",
            "description": "<p>IP address format of IPv4 - (D: 0.0.0.0)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "eisRoute.iPv6Settings",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eisRoute.iPv6Settings.ipMask",
            "description": "<p>Mask address format of of IPv6 (D: 64)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eisRoute.iPv6Settings.ipAddress",
            "description": "<p>IP address format of of IPv6 - (D: ::)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - get EisRoute",
          "content": "{\n  \"tag\": \"eisRoute\",\n  \"action\": \"get\",\n  \"id\": \"60101\",\n  \"parentTag\": \"eisRoutes\",\n  \"parentId\": \"10911\",\n  \"parameters\": {\n    \"general\": {\n      \"description\": \"test\",\n      \"interfaceId\": \"34003\",\n      \"ipVer\": \"IPv4\",\n      \"iPv4Settings\": {\n        \"ipAddress\": \"10.20.50.50\",\n        \"ipMask\": \"255.255.0.0\"\n      }\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "EisRoute",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/restapi/v4/alarms-severity",
    "title": "Alarms export",
    "version": "4.2.0",
    "group": "Export_Alarms_Severity",
    "parameter": {
      "examples": [
        {
          "title": "Request Example - export alarms ",
          "content": "curl -X GET http://IP_ADDRESS/restapi/v4/alarms-severity -u \"USER:PASSWORD\" --output FILENAME.xml",
          "type": "curl"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Export_Alarms_Severity",
    "name": "GetRestapiV4AlarmsSeverity",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/alarms-severity"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Firewall Rule",
    "version": "4.2.0",
    "name": "Firewall_Rule",
    "group": "Firewall_Rule",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firewallRule.id",
            "description": "<p>Unique String field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firewallRule.tag",
            "description": "<p>firewallRule</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"firewall\""
            ],
            "optional": false,
            "field": "firewallRule.parentTag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"1100057255\""
            ],
            "optional": false,
            "field": "firewallRule.parentId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"create\"",
              "\"get\"",
              "\"update\"",
              "\"delete\""
            ],
            "optional": false,
            "field": "firewallRule.action",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "firewallRule.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "firewallRule.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "0,65535",
            "optional": false,
            "field": "firewallRule.parameters.general.fromPort",
            "description": "<p>start of ports range to block / allow</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "0,65535",
            "optional": false,
            "field": "firewallRule.parameters.general.toPort",
            "description": "<p>end of ports range to block / allow</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"blocked\"",
              "\"allowed\""
            ],
            "optional": false,
            "field": "firewallRule.parameters.general.management",
            "description": "<p>block / allow ports range on management interface (Slot 1, Port 1)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"blocked\"",
              "\"allowed\""
            ],
            "optional": false,
            "field": "firewallRule.parameters.general.cas",
            "description": "<p>block / allow ports range on cas interface (Slot 1, Port 2)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"blocked\"",
              "\"allowed\""
            ],
            "optional": false,
            "field": "firewallRule.parameters.general.other",
            "description": "<p>block / allow ports range on all other interfaces</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Create Firewall Rule",
          "content": "{\n  \"tag\": \"firewallRule\",\n  \"action\": \"create\",\n  \"parentTag\": \"firewall\",\n  \"parentId\": \"1100057255\",\n  \"parameters\": {\n    \"general\": {\n      \"fromPort\": 3000,\n      \"toPort\": 3010,\n      \"management\": \"allowed\",\n      \"cas\": \"allowed\",\n      \"other\": \"blocked\"\n    }\n  }\n}",
          "type": "json"
        },
        {
          "title": "Update Firewall Rule",
          "content": "{\n    \"tag\": \"firewallRule\",\n    \"action\": \"update\",\n    \"id\": \"1100057256\",\n    \"parameters\": {\n        \"general\": {\n          \"fromPort\": 4071,\n          \"toPort\": 5021,\n          \"management\": \"allowed\",\n          \"cas\": \"allowed\",\n          \"other\": \"allowed\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Firewall_Rule",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/reboot",
    "title": "",
    "version": "4.2.0",
    "group": "Firmware_Reboot",
    "filename": "apidoc/doc.js",
    "groupTitle": "Firmware_Reboot",
    "name": "PostRestapiV4Reboot",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/reboot"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/reset",
    "title": "",
    "version": "4.2.0",
    "group": "Firmware_Reset_-_Restart_Application",
    "filename": "apidoc/doc.js",
    "groupTitle": "Firmware_Reset_-_Restart_Application",
    "name": "PostRestapiV4Reset",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/reset"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/upgrade",
    "title": "",
    "version": "4.2.0",
    "group": "Firmware_Upgrade",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upgrade.subCommand",
            "description": "<p>BackgroundDownload - To upload and update firmware version<br/>GetUpgradeStatus - To see upgrade status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "upgrade.filePath",
            "description": "<p>Link to firmware upgrade file. Relevant for subCommand=BackgroundDownload</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "upgrade.unlimitedTimeout",
            "description": "<ul> <li>disable the connection timeout</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "upgrade.cancel",
            "description": "<ul> <li>Cancel the current upgrade process, success only if the upgrade is at installing state, takes 1-2 seconds</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "upgrade.status",
            "description": "<p>Upgrade status. Relevant for subCommand=GetUpgradeStatus</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "upgrade.stage",
            "description": "<p>Upgrade stage. Relevant for subCommand=GetUpgradeStatus</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "upgrade.progress",
            "description": "<p>Progress in percentage. Relevant for subCommand=GetUpgradeStatus</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GetUpgradeStatus Response Example",
          "content": "{\n \"status\": \"Started\",\n \"stage\": \"Downloading\",\n \"progress\": 30\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Firmware_Upgrade",
    "name": "PostRestapiV4Upgrade",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/upgrade"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/restapi/v4/conf",
    "title": "get Entity",
    "version": "4.2.0",
    "group": "General",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Object id (optional in case there is a tag)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>Object tag</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": "<p>get list of tags with the first object id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "action",
            "description": "<p>get or get_tree (default get if not specified)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>ability to filter by key (you should specify tag name)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "val",
            "description": "<p>filter key value</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partial",
            "description": "<p>true for partial compare for key val</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ids",
            "description": "<p>true for getting just ids without content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "debug",
            "description": "<p>list of enums</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "realTimeData",
            "description": "<p>Bypass configuration cache - get live data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Examples -  url",
          "content": "[ip]/restapi/v4/conf?tag=platform&id=1\n[ip]/restapi/v4/conf?tag=platform&id=1&realTimeData=1\n[ip]/restapi/v4/conf?tags\n[ip]/restapi/v4/conf?debug\n[ip]/restapi/v4/conf?tag=card&key=id&val=1000000031\n[ip]/restapi/v4/conf?ids=true",
          "type": "json"
        },
        {
          "title": "Request Example - get_tree of output TS",
          "content": "{\n \"tag\": \"outTs\",\n \"action\": \"get_tree\",\n \"id\": \"5000001\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "General",
    "name": "GetRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/generate-scte35",
    "title": "Send Scte35 message to the DPI PID",
    "version": "4.2.0",
    "group": "Generate_Scte35",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serviceId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "command",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tier",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "cancel",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outOfNetwork",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "eventId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "spliceTimeDelay",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "autoReturn",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ptsDelay",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "descriptors",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "descriptors.segmentationDescriptor",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "descriptors.segmentationDescriptor.segmentationEventId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "descriptors.segmentationDescriptor.segmentationEventCancelIndicator",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "descriptors.segmentationDescriptor.segmentationDuration",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "descriptors.segmentationDescriptor.segmentationTypeId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "descriptors.segmentationDescriptor.segmentNum",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "descriptors.segmentationDescriptor.segmentsExpected",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "descriptors.segmentationDescriptor.subSegmentNum",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "descriptors.segmentationDescriptor.subSegmentsExpected",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "descriptors.segmentationDescriptor.deliveryRestrictions",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "descriptors.segmentationDescriptor.deliveryRestrictions.webDeliveryAllowedFlag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "descriptors.segmentationDescriptor.deliveryRestrictions.noRegionalBlackoutFlag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "descriptors.segmentationDescriptor.deliveryRestrictions.archiveAllowedFlag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "descriptors.segmentationDescriptor.deliveryRestrictions.deviceRestrictions",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "descriptors.segmentationDescriptor.segmentationUpid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "descriptors.segmentationDescriptor.segmentationUpid.segmentationUpidType",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "descriptors.segmentationDescriptor.segmentationUpid.formatIdentifier",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descriptors.segmentationDescriptor.segmentationUpid.segmentationUpidName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "descriptors.segmentationDescriptor.component",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "descriptors.segmentationDescriptor.component.componentTag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "descriptors.segmentationDescriptor.component.ptsOffset",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "descriptors.availDescriptor",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "descriptors.availDescriptor.providerAvailId",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example ",
          "content": "\n[IP]/restapi/v4/generate-scte35 \n\nbody:\n\n{\n \"serviceId\": \"5300001\",\n \"command\": 5,\n \"tier\": 4095,\n \"cancel\": false,\n \"outOfNetwork\": false,\n \"eventId\": 10050,\n \"spliceTimeDelay\": 5000,\n \"duration\": 10000,\n \"autoReturn\": false,\n \"ptsDelay\": 0,\n \"descriptors\": [{\n           \"segmentationDescriptor\": {\n               \"segmentationEventId\": 1,\n               \"segmentationEventCancelIndicator\": true,\n               \"segmentationDuration\": 0,\n               \"segmentationTypeId\": 0,\n               \"segmentNum\": 0,\n               \"segmentsExpected\": 0,\n               \"subSegmentNum\": 0,\n               \"subSegmentsExpected\": 0,\n               \"deliveryRestrictions\": {\n                   \"webDeliveryAllowedFlag\": true,\n                   \"noRegionalBlackoutFlag\": true,\n                   \"archiveAllowedFlag\": true,\n                   \"deviceRestrictions\": 0\n               },\n               \"segmentationUpid\": [{\n                       \"segmentationUpidType\": 0,\n                       \"formatIdentifier\": 0,\n                       \"segmentationUpidName\": \"string\"\n                   }\n               ],\n               \"component\": [{\n                       \"componentTag\": 0,\n                       \"ptsOffset\": 0\n                   }\n               ]\n           },\n           \"availDescriptor\": {\n               \"providerAvailId\": 0\n           }\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Generate_Scte35",
    "name": "PostRestapiV4GenerateScte35",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/generate-scte35"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Update IP Port",
    "version": "4.2.0",
    "group": "IP_Port",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipPort.id",
            "description": "<p>Unique String field – Relevant for update/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipPort.tag",
            "description": "<p>ipPort</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipPort.action",
            "description": "<p>update/get</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "ipPort.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipPort.parameters.description",
            "description": "<p>Alphanumeric field  (e.g. &quot;GbE-1&quot;, &quot;eth-3&quot;, etc)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ipPort.parameters.port",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "ipPort.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "ipPort.parameters.general.enable",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "ipPort.parameters.general.obtainIP",
            "description": "<p>true (D) / false - Relevant for the management port only</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ipPort.parameters.general.maxSpeed",
            "description": "<p>1 (D) / 10 – Read only</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipPort.parameters.general.iPv4Addr",
            "description": "<p>IP address format (IPv4)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipPort.parameters.general.iPv4Mask",
            "description": "<p>– Mask address format (IPv4)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipPort.parameters.general.iPv4GW",
            "description": "<ul> <li>IP address format (IPv4)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipPort.parameters.general.iPv4MAC",
            "description": "<ul> <li>MAC address format (IPv4) – Read only</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipPort.parameters.general.iPv6GlobalAddr",
            "description": "<ul> <li>IP address format (IPv6)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipPort.parameters.general.iPv6SubnetLen",
            "description": "<p>– Mask address format (IPv6)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipPort.parameters.general.iPv6GW",
            "description": "<ul> <li>IP address format (IPv6)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipPort.parameters.general.iPv6LinkLocalAddr",
            "description": "<ul> <li>MAC address format (IPv6) – Read only</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "ipPort.parameters.general.iPv6LinkLocalSubnetLen",
            "description": "<ul> <li>Numeric field – Read only</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "ipPort.parameters.portRedundancy",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Off\"",
              "\"Hot-Standby\"",
              "\"Dual\"",
              "\"Teaming\""
            ],
            "optional": false,
            "field": "ipPort.parameters.portRedundancy.mode",
            "description": "<p><b>Note:</b> Teaming redundancy mode is service affecting as application restarts</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Manual\"",
              "\"Manual Revert\"",
              "\"Automatic\"",
              "\"Automatic Revert\""
            ],
            "optional": false,
            "field": "ipPort.parameters.portRedundancy.scheme",
            "description": "<p>Applicable when Mode: Hot-Standby</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Primary\"",
              "\"Backup\""
            ],
            "optional": false,
            "field": "ipPort.parameters.portRedundancy.activePort",
            "description": "<p>Applicable when Scheme: Manual</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "ipPort.parameters.other",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "ipPort.parameters.other.shapingOutBitrate",
            "description": "<ul> <li>false (D) / true</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "ipPort.parameters.other.autonegotiation",
            "description": "<ul> <li>false (D) / true</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - update ipPort",
          "content": "{\n \"tag\": \"ipPort\",\n \"action\": \"update\",\n \"id\": \"34001\",\n \"parameters\": {\n \"description\":\" update ip port template\",\n \"port\": 1,\n \"general\": {\n     \"enable\": true,\n     \"obtainIP\": false,\n     \"iPv4Addr\": \"10.42.21.223\",\n     \"iPv4Mask\": \"255.255.255.0\",\n     \"iPv4GW\": \"10.42.21.1\",\n     \"iPv4MAC\": \"94:40:C9:43:AF:64\",\n     \"iPv6GlobalAddr\": \"::\",\n     \"iPv6SubnetLen\": 64,\n     \"iPv6GW\": \"::\",\n     \"iPv6LinkLocalAddr\": \"::\",\n     \"iPv6LinkLocalSubnetLen\": 64\n   },\n   \"other\": {\n     \"shapingOutBitrate\": false,\n     \"autonegotiation\":false\n   },\n   \"portRedundancy\": {\n     \"mode\": \"Off\"\n   }\n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "IP_Port",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Update/Get IPsecManager",
    "version": "4.2.0",
    "group": "IPsec",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipsecManager.id",
            "description": "<p>Unique String field - Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipsecManager.tag",
            "description": "<p>ipsecManager</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipsecManager.parentId",
            "description": "<p>String field linked to the Parent node/object – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipsecManager.parentTag",
            "description": "<p>ipsecManager Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipsecManager.action",
            "description": "<p>update/get</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "ipsecManager.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "ipsecManager.parameters.enableIPsec",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "ipsecManager.parameters.natTraversal",
            "description": "<p>true (D) / false</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Update Example",
          "content": "{\n \"tag\":\"ipsecManager\",\n \"action\": \"update\",\n \"id\": \"151000\",\n \"parameters\": {\n   \"enableIPsec\": false,\n   \"natTraversal\": false\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "IPsec",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Create/Update/Get/Delete IPsec",
    "version": "4.2.0",
    "group": "IPsec",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipsecServer.id",
            "description": "<p>Unique String field - Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipsecServer.tag",
            "description": "<p>ipsecServer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipsecServer.parentId",
            "description": "<p>String field linked to the Parent node/object – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipsecServer.parentTag",
            "description": "<p>ipsecManager Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipsecServer.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "ipsecServer.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "ipsecServer.parameters.enable",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipsecServer.parameters.localEndpoint",
            "description": "<p>String field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipsecServer.parameters.localIp",
            "description": "<p>IP address format of IPv4 (read only property)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipsecServer.parameters.remoteEndpoint",
            "description": "<p>IP address format of IPv4</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipsecServer.parameters.remoteSubnet",
            "description": "<p>IP address format of IPv4</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipsecServer.parameters.remoteSubnetMask",
            "description": "<p>IP address format of IPv4</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipsecServer.parameters.preSharedKey",
            "description": "<p>Alphanumeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ipsecServer.parameters.ikeLifetime",
            "description": "<p>Numeric field (Default:1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ipsecServer.parameters.saLifetime",
            "description": "<p>Numeric field (Default:8)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "ipsecServer.parameters.dpdEnable",
            "description": "<p>true (D) / false</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ipsecServer.parameters.dpdDelay",
            "description": "<p>Numeric field (Default:5)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ipsecServer.parameters.dpdInterval",
            "description": "<p>Numeric field (Default:60)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ipsecServer.parameters.status",
            "description": "<p>String field (read only property)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Create Example",
          "content": "{\n \"tag\":\"ipsecServer\",\n \"action\": \"create\",\n \"parentTag\": \"ipsecManager\",\n \"parentId\": \"151000\",\n \"parameters\": {\n   \"localEndpoint\": \"34001\",\n   \"remoteEndpoint\": \"0.0.2.2\",\n   \"remoteSubnet\": \"0.0.2.1\",\n   \"preSharedKey\": \"123456\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "Update Example",
          "content": "{\n \"tag\":\"ipsecServer\",\n \"action\": \"update\",\n \"parentTag\": \"ipsecManager\",\n \"id\": \"151001\",\n \"parameters\": {\n   \"enable\": false,\n   \"localEndpoint\": \"34001\",\n   \"remoteEndpoint\": \"0.0.2.2\",\n   \"remoteSubnet\": \"0.0.2.1\",\n   \"preSharedKey\": \"123456\",\n   \"ikeLifetime\": 2,\n   \"saLifetime\": 9,\n   \"dpdEnable\": false,\n   \"dpdDelay\": 4,\n   \"dpdInterval\": 59\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "IPsec",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/alarms-severity",
    "title": "Alarms Import",
    "version": "4.2.0",
    "group": "Import_Alarms_Severity",
    "parameter": {
      "examples": [
        {
          "title": "Request Example - import alarms ",
          "content": "curl -X POST http://IP_ADDRESS/restapi/v4/alarms-severity -u \"USER:PASSWORD\" -F 'file=@FILENAME.xml'",
          "type": "curl"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Import_Alarms_Severity",
    "name": "PostRestapiV4AlarmsSeverity",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/alarms-severity"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Get Input PID",
    "version": "4.2.0",
    "group": "Input_PID",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inPid.id",
            "description": "<p>Unique String field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inPid.tag",
            "description": "<p>inPid</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "get"
            ],
            "optional": false,
            "field": "inPid.action",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inPid.id",
            "description": "<p>Unique String field</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inPid.tag",
            "description": "<p>inPid</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inPid.parentTag",
            "description": "<p>inSrv</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inPid.parentId",
            "description": "<p>String field linked to the Parent node/object (inSrv)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "inPid.parameters",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "inPid.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "inPid.parameters.general.pid",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "inPid.parameters.general.esType",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "inPid.parameters.general.descriptors",
            "description": "<p>List</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inPid.parameters.general.descriptors.tag",
            "description": "<p>Hexadecimal String field (max 2 characters)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inPid.parameters.general.descriptors.value",
            "description": "<p>Hexadecimal String field (0-max descriptor length)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example - get inPid",
          "content": "{   \n   \"tag\": \"inPid\",\n   \"id\": \"10098337\",\n   \"action\": \"get\",\n   \"parentTag\": \"inSrv\",\n   \"parentId\": \"520001\",\n   \"parameters\": {\n       \"general\": {\n           \"pid\": 1301,\n           \"esType\": 36,\n           \"descriptors\": [\n               {\n                   \"tag\": \"38\",\n                   \"value\": \"1600000000600000000000788F1F1F\"\n               }\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Input_PID",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Get Input Service",
    "version": "4.2.0",
    "group": "Input_Service",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSrv.id",
            "description": "<p>Unique String field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSrv.tag",
            "description": "<p>inSrv</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "get"
            ],
            "optional": false,
            "field": "inSrv.action",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inSrv.id",
            "description": "<p>Unique String field</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inSrv.tag",
            "description": "<p>inSrv</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inSrv.parentTag",
            "description": "<p>inTs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inSrv.parentId",
            "description": "<p>String field linked to the Parent node/object (inTs)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "inSrv.parameters",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "inSrv.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inSrv.parameters.general.name",
            "description": "<p>String field</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "inSrv.parameters.general.mpegId",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "inSrv.parameters.general.pmtPid",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "inSrv.parameters.general.pcrPid",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "inSrv.parameters.general.descriptors",
            "description": "<p>List</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inSrv.parameters.general.descriptors.tag",
            "description": "<p>Hexadecimal String field (max 2 characters)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inSrv.parameters.general.descriptors.value",
            "description": "<p>Hexadecimal String field (0-max descriptor length)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example - get inSrv",
          "content": "{   \n   \"tag\": \"inSrv\",\n   \"id\": \"520001\",\n   \"action\": \"get\",\n   \"parentTag\": \"inTs\",\n   \"parentId\": \"4000011\",\n   \"parameters\": {\n       \"general\": {\n           \"name\": \"NBA\",\n           \"mpegId\": 130,\n           \"pmtPid\": 40,\n           \"pcrPid\": 23,\n           \"descriptors\": [\n               {\n                   \"tag\": \"5\",\n                   \"value\": \"43554549\"\n               },\n               {\n                   \"tag\": \"9\",\n                   \"value\": \"188DE228\"\n               }\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Input_Service",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Create/Update Input Socket",
    "version": "4.2.0",
    "group": "Input_Socket",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.id",
            "description": "<p>Unique String field – Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.tag",
            "description": "<p>inSocket</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parentId",
            "description": "<p>String field linked to the Parent node/object, asiPort Applicable for regular Socket (without vlan Tagging) – Relevant for Create “action”, vlan Applicable for Tagged Socket (with vlan Tagging) – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parentTag",
            "description": "<p>asiPort/ipPort – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "inSocket.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "inSocket.parameters.general",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.general.description",
            "description": "<p>Alphanumeric field (e.g. &quot;Socket X&quot;, &quot;Satellite TS&quot;, etc)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.general.sourceType",
            "description": "<p>IP (D) / File</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.ipType",
            "description": "<p>Multicast (D) / Unicast / SRT / Broadcast</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.ipVer",
            "description": "<p>IPv4  (D) / IPv6</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.ipAddress",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.udpPort",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.encapMode",
            "description": "<p>AutoDet (D), UDP, RTP, HRTP, DToIP</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.rtpReorder",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "Caller",
              "Listener"
            ],
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.ipSRT.connectMode",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "IP",
              "URL"
            ],
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.ipSRT.callerSettings.remoteConnection",
            "description": "<p>IP(D) / URL.<br/>Relevant for connectMode: Caller</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.ipSRT.callerSettings.remoteIp",
            "description": "<p>IP to connect to.<br/>IP address format (only IPv4).<br/>Relevant for remoteConnection: IP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.ipSRT.callerSettings.remoteUrl",
            "description": "<p>URL to connect to.<br/>String field representing SRT URL.<br/>Relevant for remoteConnection: URL</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "0,65535",
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.ipSRT.callerSettings.remotePort",
            "description": "<p>Port to connect to.<br/>Relevant for connectMode: Caller</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.ipSRT.callerSettings.streamId",
            "description": "<p>SRT Stream ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "0,100",
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.ipSRT.callerSettings.discoveryTimeout",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Disable\"",
              "\"AES 128\"",
              "\"AES 192\"",
              "\"AES 256\""
            ],
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.ipSRT.callerSettings.encryptType",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.ipSRT.passphrase",
            "description": "<p>relevant for ipSRT.encryptType: AES 128, AES 192, AES 256</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "20,8000",
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.ipSRT.latency",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.ipSRT.srtPathRedundancy.enable",
            "description": "<p>enable srtPathRedundancy</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.ipSRT.srtPathRedundancy.interface",
            "description": "<p>String field which will be used to link to the Interface object</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "IP",
              "URL"
            ],
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.ipSRT.srtPathRedundancy.remoteConnection",
            "description": "<p>IP(D) / URL.<br/>Relevant for connectMode: Caller</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.ipSRT.srtPathRedundancy.remoteIp",
            "description": "<p>IP to connect to.<br/>IP address format (only IPv4).<br/>Relevant for remoteConnection: IP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.ipSRT.srtPathRedundancy.remoteUrl",
            "description": "<p>URL to connect to.<br/>String field representing SRT URL.<br/>Relevant for remoteConnection: URL</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "0,65535",
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.ipSRT.srtPathRedundancy.remotePort",
            "description": "<p>Port to connect to.<br/>Relevant for connectMode: Caller</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "0,65535",
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.ipSRT.srtPathRedundancy.localPort",
            "description": "<p>Port to connect through.<br/>Value: 0 will auto assign a port</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.general.vlanID",
            "description": "<p>String field which will be used to link to the VLAN Identifier object</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inSocket.parameters.general.alias",
            "description": "<p>Number field linked to the alias port index</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "inSocket.parameters.general.maskFailedAlarm",
            "description": "<p>boolean field to mask the socket fail alarm for socket receiving SCTE-18 PID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.general.fileSettings.fileProtocol",
            "description": "<p>Local File (D) / HTTP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.general.fileSettings.fileName",
            "description": "<p>Alphanumeric field (e.g. &quot;Asset 1&quot;, etc)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "inSocket.parameters.seamlessTsSwitching.enable",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.seamlessTsSwitching.interface",
            "description": "<p>String field which will be used to link to the Interface object</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.seamlessTsSwitching.vlanIdentifier",
            "description": "<p>String field which will be used to link to the VLAN Identifier object</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.seamlessTsSwitching.ipVer",
            "description": "<p>IPv4  (D) / IPv6</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.seamlessTsSwitching.ipAddress",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inSocket.parameters.seamlessTsSwitching.udpPort",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "inSocket.parameters.seamlessTsSwitching.ssmList",
            "description": "<p>List of 4 SSMs</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.seamlessTsSwitching.ssmList.SSM1",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.seamlessTsSwitching.ssmList.SSM2",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.seamlessTsSwitching.ssmList.SSM3",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.seamlessTsSwitching.ssmList.SSM4",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "inSocket.parameters.fec.enable",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.deJittering.mode",
            "description": "<p>Based on PCR (D) / Based on Bitrate / Data / None</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inSocket.parameters.deJittering.latency",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inSocket.parameters.deJittering.average",
            "description": "<p>Numeric field - Maximum bitrate, used for internal load balancing</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "inSocket.parameters.deJittering.externalStatMux",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "inSocket.parameters.ssmList",
            "description": "<p>List of 22 SSMs</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmList.SSM1",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmList.SSM2",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmList.SSM3",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmList.SSM4",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmList.SSM5",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmList.SSM6",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmList.SSM7",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmList.SSM8",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmList.SSM9",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmList.SSM10",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmList.SSM11",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmList.SSM12",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmList.SSM13",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmList.SSM14",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmList.SSM15",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmList.SSM16",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmList.SSM17",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmList.SSM18",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmList.SSM19",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmList.SSM20",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmList.SSM21",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmList.SSM22",
            "description": "<p>IP address format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmListStatus",
            "description": "<p>List of status (Unavailable / Available / Available(Active)) for 22 SSMs (get only)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmListStatus.SSMStatus1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmListStatus.SSMStatus2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmListStatus.SSMStatus3",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmListStatus.SSMStatus4",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmListStatus.SSMStatus5",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmListStatus.SSMStatus6",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmListStatus.SSMStatus7",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmListStatus.SSMStatus8",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmListStatus.SSMStatus9",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmListStatus.SSMStatus10",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmListStatus.SSMStatus11",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmListStatus.SSMStatus12",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmListStatus.SSMStatus13",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmListStatus.SSMStatus14",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmListStatus.SSMStatus15",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmListStatus.SSMStatus16",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmListStatus.SSMStatus17",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmListStatus.SSMStatus18",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmListStatus.SSMStatus19",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmListStatus.SSMStatus20",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmListStatus.SSMStatus21",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inSocket.parameters.ssmListStatus.SSMStatus22",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.ipSRT",
            "description": "<p>Relevant for ipType: SRT</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.ipSRT.callerSettings",
            "description": "<p>relevant for connectMode Caller</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "inSocket.parameters.general.ipSettings.ipSRT.srtPathRedundancy",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "inSocket.parameters.general.fileSettings",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "inSocket.parameters.seamlessTsSwitching",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "inSocket.parameters.fec",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "inSocket.parameters.deJittering",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - update inSocket IP",
          "content": "{   \n   \"id\": \"440001\",\n   \"tag\": \"inSocket\",\n   \"action\": \"update\",\n     \"parameters\": {\n       \"general\": {\n           \"description\": \"Input Socket Template\",\n           \"sourceType\": \"IP\",\n           \"ipSettings\": {\n               \"ipType\": \"Multicast\",\n               \"ipVer\": \"IPv4\",\n               \"ipAddr\": \"239.0.1.177\",\n               \"udpPort\": 2000,\n               \"encapMode\": \"AutoDet\"\n           }\n       },\n       \"seamlessTsSwitching\": {\n             \"enable\": true,\n           \"interface\": \"34006\",\n           \"vlanIdentifier\": \"33000001\",\n           \"ipVer\": \"IPv4\",\n           \"ipAddress\": \"225.0.0.3\",\n           \"udpPort\": 2003,\n           \"ssmList\": [\n               \"10.10.10.1\",\n               \"10.10.10.2\"\n           ]\n       },\n       \"fec\": {\n           \"enable\": false\n       },\n       \"deJittering\": {\n           \"mode\": \"Based on Bitrate\",\n           \"average\": 300,\n           \"latency\": 333,\n           \"externalStatMux\": false\n       },\n        \"ssmList\": [\n           \"10.42.18.215\",\n           \"10.42.18.216\"\n       ]\n    }\n}",
          "type": "json"
        },
        {
          "title": "Request Example - update inSocket File",
          "content": "{\n{\n  \"tag\": \"inSocket\",\n  \"id\": \"440001\",\n  \"action\": \"update\",\n   \"parameters\": {\n        \"general\": {\n          \"description\": \"\",\n          \"sourceType\": \"File\",\n          \"fileSettings\": {\n            \"fileName\": \"test.ts\",\n            \"fileProtocol\": \"Local File\"\n          },\n          \"maskFailedAlarm\": false\n       }\n    }\n}",
          "type": "json"
        },
        {
          "title": "Request Example - create inSocket ipv4",
          "content": "   inSocket must be created with inTs\n{\n   \"tag\": \"inSocket\",\n   \"action\": \"create\",\n   \"parentId\": \"34006\",\n   \"parentTag\": \"ipPort\",\n   \"parameters\": {\n       \"general\": {\n           \"description\": \"Input Socket Template\",\n           \"sourceType\": \"IP\",\n           \"ipSettings\": {\n               \"ipType\": \"Multicast\",\n               \"ipVer\": \"IPv4\",\n               \"ipAddr\": \"239.0.1.1\",\n               \"udpPort\": 2000,\n               \"encapMode\": \"AutoDet\",\n               \"rtpReorder\": false\n           }\n       }\n   },\n   \"sons\": [\n       {\n           \"tag\": \"inTs\",\n           \"action\": \"create\",\n           \"parameters\": {\n               \"general\": {\n                   \"description\": \"Input TS template\"\n               }\n           }\n       }\n   ]\n}",
          "type": "json"
        },
        {
          "title": "Request Example - create inSocket ipv6",
          "content": "   inSocket must be created with inTs\n{\n   \"tag\": \"inSocket\",\n   \"action\": \"create\",\n   \"parentId\": \"34006\",\n   \"parentTag\": \"ipPort\",\n   \"parameters\": {\n       \"general\": {\n           \"description\": \"Input Socket Template ipv6\",\n           \"sourceType\": \"IP\",\n           \"ipSettings\": {\n               \"ipType\": \"Multicast\",\n               \"ipVer\": \"IPv6\",\n               \"ipAddr\": \"ff08::1\",\n               \"udpPort\": 2000,\n               \"encapMode\": \"AutoDet\",\n               \"rtpReorder\": false\n           }\n       }\n   },\n   \"sons\": [\n       {\n           \"tag\": \"inTs\",\n           \"action\": \"create\",\n           \"parameters\": {\n               \"general\": {\n                   \"description\": \"Input TS template\"\n               }\n           }\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response Example - Created 201": [
          {
            "group": "Response Example - Created 201",
            "type": "String",
            "optional": false,
            "field": "Object",
            "description": "<p>ID of Created input Socket object</p>"
          }
        ]
      }
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Input_Socket",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Create/Update Input TS",
    "version": "4.2.0",
    "group": "Input_TS",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inTs.id",
            "description": "<p>Unique String field - Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inTs.tag",
            "description": "<p>inTs</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inTs.parentId",
            "description": "<p>String field linked to the Parent node/object (inSocket /asiInAP) – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inTs.parentTag",
            "description": "<p>inSocket /asiInAP – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inTs.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "inTs.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "inTs.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inTs.parameters.general.mpegTSid",
            "description": "<p>Unique numeric field – Read only</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inTs.parameters.general.description",
            "description": "<p>Alphanumeric field (e.g. &quot;Socket X&quot;, &quot;Satellite TS&quot;, etc)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inTs.parameters.general.reportCC",
            "description": "<p>Always (D) / Never / If PID is Passed</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inTs.parameters.general.bitrate",
            "description": "<p>(bps) Numeric field - Measured input bitrate – Read only</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inTs.parameters.general.padding",
            "description": "<p>(bps) - Numeric field - Measured input Padding bitrate – Read only</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inTs.parameters.general.effectiveRate",
            "description": "<p>(bps) - Numeric field - Measured input Effective bitrate – Read only</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inTs.parameters.general.ccErrors",
            "description": "<p>Numeric field - Measured input CC errors – Read only</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "inTs.parameters.general.resetCounters",
            "description": "<p>Command option – Reset the CC errors counter</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "inTs.parameters.general.eligiable4Slate",
            "description": "<p>true (D) / false</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inTs.parameters.general.tables",
            "description": "<p>PSI/SI (D) / PSI / PSIP / None</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "inTs.parameters.general.selectivePidExtraction",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "inTs.parameters.descramblingKey",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "inTs.parameters.descramblingKey.enable",
            "description": "<p>false (D) / true - Can be set to true only if General scrambling mode of device is AES CBC / AES CBC-T / AES ECB / AES ECB-T</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inTs.parameters.descramblingKey.fixedKey",
            "description": "<p>Hexadecimal field (maximum 32 characters and length must be a multiple of 2 characters)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "inTs.parameters.redundancy",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "inTs.parameters.redundancy.scheme",
            "description": "<p>None (D) / Manual / Manual Revert / Automatic / Automatic Revert</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inTs.parameters.redundancy.numBkp",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "inTs.parameters.redundancy.backupList",
            "description": "<p>List up to 6 objects</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "inTs.parameters.redundancy.backupList.backupSrcId",
            "description": "<p>Unique String field – Object index</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "inTs.parameters.redundancy.activeTs",
            "description": "<p>Primary (D) / Backup1 / Backup2 / Backup3 / Backup4 / Backup5 / Backup6 – Applicable when Scheme: Manual</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "inTs.parameters.redundancy.switchTo",
            "description": "<p>Primary / Backup1 / Backup2 / Backup3 / Backup4 / Backup5 / Backup6 – Applicable when Scheme: Automatic and Manual Revert</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inTs.parameters.redundancy.inactivity.failoverWindow",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inTs.parameters.redundancy.inactivity.timeoutRevert",
            "description": "<p>Numeric field – Applicable when Scheme: Automatic Revert</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "inTs.parameters.redundancy.ccErrors",
            "description": "<p>true / false (D) – Applicable when Scheme: Not Manual</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inTs.parameters.redundancy.ccErrorProps.numCCerrors",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inTs.parameters.redundancy.ccErrorProps.ccWindow",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inTs.parameters.redundancy.ccErrorProps.ccErrRevert",
            "description": "<p>Numeric field – Applicable when Scheme: Automatic Revert</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "inTs.parameters.redundancy.ccErrorEvent",
            "description": "<p>true / false (D) – Applicable when Scheme: Not Manual</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inTs.parameters.redundancy.ccErrorEventProps.allowedInterval",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inTs.parameters.redundancy.ccErrorEventProps.ccErrEvents",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inTs.parameters.redundancy.ccErrorEventProps.ccErrCondRevert",
            "description": "<p>Numeric field – Applicable when Scheme: Automatic Revert</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "inTs.parameters.redundancy.bitrate",
            "description": "<p>true / false (D) – Applicable when Scheme: Not Manual</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inTs.parameters.redundancy.bitrateProps.bitrateWindow",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inTs.parameters.redundancy.bitrateProps.bitrateRevert",
            "description": "<p>Numeric field – Applicable when Scheme: Automatic Revert</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "inTs.parameters.redundancy.patMissing",
            "description": "<p>true / false (D) – Applicable when Scheme: Not Manual</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inTs.parameters.redundancy.patErrorProps.patFailoverWindow",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inTs.parameters.redundancy.patErrorProps.patTimeoutRevert",
            "description": "<p>Numeric field – Applicable when Scheme: Automatic Revert</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "inTs.parameters.redundancy.pmtMissing",
            "description": "<p>true / false (D) – Applicable when Scheme: Not Manual</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inTs.parameters.redundancy.pmtErrorProps.pmtFailoverWindow",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "inTs.parameters.redundancy.pmtErrorProps.pmtTimeoutRevert",
            "description": "<p>Numeric field – Applicable when Scheme: Automatic Revert</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "inTs.parameters.redundancy.scr",
            "description": "<p>true  / false (D) – Applicable when Scheme: Not Manual</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "inTs.parameters.redundancy.invalidEsType",
            "description": "<p>true / false (D) – Applicable when Scheme: Not Manual</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inTs.parameters.redundancy.trackComponent",
            "description": "<p>&quot;All&quot; / &quot;Passed&quot; -  Choose which components shall be monitored to trigger the switchover</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "inTs.parameters.redundancy.inactivity",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "inTs.parameters.redundancy.ccErrorProps",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "inTs.parameters.redundancy.ccErrorEventProps",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "inTs.parameters.redundancy.bitrateProps",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "inTs.parameters.redundancy.patErrorProps",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "inTs.parameters.redundancy.pmtErrorProps",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - update inTs",
          "content": "{   \n   \"id\": \"4000002\",\n   \"tag\": \"inTs\",\n   \"action\": \"update\",\n   \"parameters\": {\n       \"general\": {\n           \"description\": \"Satellite TS\",\n           \"eligible4Slate\": true,\n           \"reportCC\": \"Always\",\n           \"tables\": \"PSI/SI\",\n           \"selectivePidExtraction\": true\n       },\n       \"descramblingKey\": {\n           \"enable\": false,\n           \"fixedKey\": \"00000000000000000000000000000000\"\n       },\n       \"redundancy\": {\n           \"scheme\": \"None\",\n           \"numBkp\": 0,\n           \"trackComponent\": \"All\",\n           \"inactivity\": {\n               \"failoverWindow\": 1\n           },\n           \"ccErrors\": false,\n           \"ccErrorProps\": {\n               \"ccWindow\": 2,\n               \"numCCerrors\": 4\n           },\n           \"ccErrorEvent\": false,\n           \"ccErrorEventProps\": {\n               \"allowedInterval\": 0,\n               \"ccErrEvents\": 5\n           },\n           \"bitrate\": false,\n           \"bitrateProps\": {\n               \"bitrateWindow\": 5\n           },\n           \"patMissing\": false,\n           \"patErrorProps\": {\n               \"patFailoverWindow\": 2\n           },\n           \"pmtMissing\": false,\n           \"pmtErrorProps\": {\n               \"pmtFailoverWindow\": 2\n           },\n           \"scr\": false,\n           \"invalidEsType\": false,\n           \"backupList\": []\n       }\n   }\n}",
          "type": "json"
        },
        {
          "title": "Request Example - create inTs",
          "content": "     inTs must be created by inSocket (put inTs as son)\n{   \n   \"tag\": \"inSocket\",\n   \"action\": \"create\",\n   \"parentId\": \"34006\",\n   \"parentTag\": \"ipPort\",\n   \"parameters\": {\n       \"general\": {\n           \"description\": \"Input Socket Template\",\n           \"sourceType\": \"IP\",\n           \"ipSettings\": {\n               \"ipType\": \"Multicast\",\n               \"ipVer\": \"IPv4\",\n               \"ipAddr\": \"239.0.1.1\",\n               \"udpPort\": 2000,\n               \"encapMode\": \"AutoDet\",\n               \"rtpReorder\": false\n           }\n       }\n   },\n   \"sons\": [\n       {\n           \"tag\": \"inTs\",\n           \"action\": \"create\",\n           \"parameters\": {\n               \"general\": {\n                   \"description\": \"Input TS template\"\n               }\n           }\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response Example - Created 201": [
          {
            "group": "Response Example - Created 201",
            "type": "String",
            "optional": false,
            "field": "Object",
            "description": "<p>ID of Created inTs object</p>"
          }
        ]
      }
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Input_TS",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Get Licensing",
    "version": "4.2.0",
    "group": "Licensing",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "licensing.id",
            "description": "<p>Unique String field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "licensing.tag",
            "description": "<p>licensing</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "get"
            ],
            "optional": false,
            "field": "licensing.action",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "licensing.id",
            "description": "<p>Unique String field</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "licensing.tag",
            "description": "<p>licensing</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "licensing.action",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "licensing.parentTag",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "licensing.parentId",
            "description": "<p>String field linked to the Parent node/object (platform)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "licensing.parameters",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "licensing.parameters.serialNumber",
            "description": "<p>UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "licensing.parameters.graceDaysRemaining",
            "description": "<p>Number of days remaining for licensing</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "licensing.parameters.licenseFeatureList",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "licensing.parameters.licenseFeatureList.name",
            "description": "<p>License name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "licensing.parameters.licenseFeatureList.description",
            "description": "<p>License description</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "licensing.parameters.licenseFeatureList.installed",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "licensing.parameters.licenseFeatureList.inUse",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "licensing.parameters.licenseFeatureList.required",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "licensing.parameters.licenseFeatureList.daysToExpiration",
            "description": "<p>Number of until expiration or &quot;-&quot; if unlimited</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - get licensing",
          "content": "{\n\"id\":\"30030001\",\n\"tag\":\"licensing\",\n\"action\":\"get\",\n\"parentTag\":\"platform\",\n\"parentId\":\"1\",\n\"parameters\": {\n    \"serialNumber\":\"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\",\n    \"graceDaysRemaining\":44,\n    \"licenseFeatureList\": [\n        {\n            \"name\":\"FW-PRM-X-BASE\",\n            \"description\":\"ProStream X base license.\",\n            \"installed\":0,\n            \"inUse\":0,\n            \"required\":0,\n            \"daysToExpiration\":\"-\"\n        }\n    ]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Licensing",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/restapi/v4/monitoring/input/ts/alltss",
    "title": "Get input all-tss Statistics",
    "version": "4.2.0",
    "group": "Monitoring",
    "success": {
      "examples": [
        {
          "title": "Input all-tss Monitoring Response Example",
          "content": "[\n {\n   \"id\": \"4000001\",\n   \"bitrate\": 0,\n   \"ccErrors\": 0,\n   \"services\": Array[1][\n     {\n       \"id\": \"520001\",\n       \"bitrate\": 0,\n       \"ccErrors\": 0,\n       \"pids\": Array[2][\n         {\n           \"id\": \"10000033\",\n           \"pidNumber\": 33,\n           \"bitrate\": 0,\n           \"ccErrors\": 0\n         },\n         {\n           \"id\": \"10000036\",\n           \"pidNumber\": 36,\n           \"bitrate\": 0,\n           \"ccErrors\": 0\n         }\n       ]\n     }\n   ],\n   \"pids\": Array[0][\n     \n   ]\n },\n {\n   \"id\": \"4000002\",\n   \"bitrate\": 0,\n   \"ccErrors\": 0,\n   \"services\": Array[0][\n     \n   ],\n   \"pids\": Array[0][\n     \n   ]\n }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Monitoring",
    "name": "GetRestapiV4MonitoringInputTsAlltss",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/monitoring/input/ts/alltss"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/restapi/v4/monitoring/output/service/allservices",
    "title": "Get output all-services Statistics",
    "version": "4.2.0",
    "group": "Monitoring",
    "success": {
      "examples": [
        {
          "title": "Output all-services Monitoring Response Example",
          "content": "[\n {\n   \"id\": \"5300038\",\n   \"pids\": Array[2][\n     {\n       \"id\": \"5100075\",\n       \"pidNumber\": 33\n     },\n     {\n       \"id\": \"5100076\",\n       \"pidNumber\": 36\n     }\n   ]\n },\n {\n   \"id\": \"5300039\"\n   \"pids\": Array[2][\n     {\n       \"id\": \"5100077\",\n       \"pidNumber\": 33\n     },\n     {\n       \"id\": \"5100078\",\n       \"pidNumber\": 36\n     }\n   ]\n }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Monitoring",
    "name": "GetRestapiV4MonitoringOutputServiceAllservices",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/monitoring/output/service/allservices"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/restapi/v4/monitoring/output/ts/alltss",
    "title": "Get output all-tss Statistics",
    "version": "4.2.0",
    "group": "Monitoring",
    "success": {
      "examples": [
        {
          "title": "Output all-tss Monitoring Response Example",
          "content": "[\n {\n   \"objId\": 5000001,\n   \"name\": \"\",\n   \"physicalTSIP\": \"239.42.20.211\",\n   \"physicalTSL2TPsessionID\": 2000,\n   \"physicalTSPort\": 2000,\n   \"physicalTSSourceAddress\": \"0.0.0.0\",\n   \"physicalTSID\": \"1\",\n   \"physicalTSVirtualQamIndex\": 1,\n   \"physicalTSOperationalMode\": \"Broadcast\",\n   \"tsConfiguredBitrate\": 20000000,\n   \"actualBitrate\": 2452369,\n   \"physicalTSPercentageUtilization\": 12,\n   \"numOfPrograms\": 1,\n   \"ccErrors\": 3,\n   \"physicalTSOutputPktCounter\": 117952388,\n   \"PhysicalTSTotalDrops\": 0,\n   \"timestamp\": 1655715901\n },\n {\n   \"objId\": 5000002,\n   \"name\": \"\",\n   \"physicalTSIP\": \"225.0.0.0\",\n   \"physicalTSL2TPsessionID\": 2001,\n   \"physicalTSPort\": 2001,\n   \"physicalTSSourceAddress\": \"0.0.0.0\",\n   \"physicalTSID\": \"2\",\n   \"physicalTSVirtualQamIndex\": 1,\n   \"physicalTSOperationalMode\": \"Broadcast\",\n   \"tsConfiguredBitrate\": 20000000,\n   \"actualBitrate\": 2458299,\n   \"physicalTSPercentageUtilization\": 12,\n   \"numOfPrograms\": 1,\n   \"ccErrors\": 0,\n   \"physicalTSOutputPktCounter\": 3951,\n   \"PhysicalTSTotalDrops\": 0,\n   \"timestamp\": 1655715901\n }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Monitoring",
    "name": "GetRestapiV4MonitoringOutputTsAlltss",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/monitoring/output/ts/alltss"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/restapi/v4/monitoring/ptp",
    "title": "Get PTP status",
    "version": "4.2.0",
    "group": "Monitoring",
    "success": {
      "examples": [
        {
          "title": "Output PTP client status",
          "content": "{\n\t\"Local time\": \"Tue Feb 06 09\",\n\t\"PTP client state\": \"PTP_LISTENING\",\n\t\"Best master ID\": \"Unknown\",\n\t\"Best master addr\": \"Unknown\",\n\t\"Master priority\": \"Unknown\",\n\t\"Time properties\": \"Unknown\",\n\t\"Offset from Master\": \"Unknown\",\n\t\"Mean Path Delay\": \"Unknown\",\n\t\"Message rates\": \"Unknown\",\n\t\"Performance\": \"Message RX 0/s, TX 1/s\",\n\t\"Announce received\": 0,\n\t\"Sync received\": 0,\n\t\"DelayReq sent\": 0,\n\t\"DelayResp received\": 0,\n\t\"State transitions\": 4,\n\t\"PTP Engine resets\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Monitoring",
    "name": "GetRestapiV4MonitoringPtp",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/monitoring/ptp"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/restapi/v4/monitoring/:source/service/:serviceId",
    "title": "Get Service Statistics",
    "version": "4.2.0",
    "group": "Monitoring",
    "description": "<p>Get Input/Output Service statistics</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "input",
              "output"
            ],
            "optional": false,
            "field": "source",
            "description": "<p>Type of Service</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serviceId",
            "description": "<p>Unique numeric string field</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Input Service Monitoring Response Example",
          "content": "{\n \"id\": \"520001\",\n \"bitrate\": 2457536,\n \"ccErrors\": 0,\n \"pids\": [\n   {\n     \"id\": \"10081953\",\n     \"pidNumber\": 33,\n     \"bitrate\": 2259008,\n     \"ccErrors\": 0\n   },\n   {\n     \"id\": \"10081956\",\n     \"pidNumber\": 36,\n     \"bitrate\": 198528,\n     \"ccErrors\": 0\n   }\n ]\n}",
          "type": "json"
        },
        {
          "title": "Output Service Monitoring Response Example",
          "content": "{\n \"id\": \"5300001\",\n \"pids\": [\n   {\n     \"id\": \"5100001\",\n     \"pidNumber\": 33\n   },\n   {\n     \"id\": \"5100002\",\n     \"pidNumber\": 36\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Monitoring",
    "name": "GetRestapiV4MonitoringSourceServiceServiceid",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/monitoring/:source/service/:serviceId"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/restapi/v4/monitoring/:source/ts/:tsId",
    "title": "Get TS Statistics",
    "version": "4.2.0",
    "group": "Monitoring",
    "description": "<p>Get Input/Output Ts statistics</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "input",
              "output"
            ],
            "optional": false,
            "field": "source",
            "description": "<p>Type of Ts</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tsId",
            "description": "<p>Unique numeric string field</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Input Ts Monitoring Response Example",
          "content": "{\n \"id\": \"4000012\",\n \"bitrate\": 20024256,\n \"ccErrors\": 0,\n \"services\": [\n   {\n     \"id\": \"520002\",\n     \"bitrate\": 2445504,\n     \"ccErrors\": 0,\n     \"pids\": [\n       {\n         \"id\": \"10090145\",\n         \"pidNumber\": 33,\n         \"bitrate\": 2246976,\n         \"ccErrors\": 0\n       },\n       {\n         \"id\": \"10090148\",\n         \"pidNumber\": 36,\n         \"bitrate\": 198528,\n         \"ccErrors\": 0\n       }\n     ]\n   }\n ],\n \"pids\": [\n   {\n     \"id\": \"20098303\",\n     \"pidNumber\": 8191,\n     \"bitrate\": 17563712,\n     \"ccErrors\": 0\n   },\n   {\n     \"id\": \"20090144\",\n     \"pidNumber\": 32,\n     \"bitrate\": 3008,\n     \"ccErrors\": 0\n   },\n   {\n     \"id\": \"20090112\",\n     \"pidNumber\": 0,\n     \"bitrate\": 6016,\n     \"ccErrors\": 0\n   }\n ]\n}",
          "type": "json"
        },
        {
          "title": "Output Ts Monitoring Response Example",
          "content": "{\n \"objId\": 5000001,\n \"name\": \"\",\n \"physicalTSIP\": \"239.42.20.211\",\n \"physicalTSL2TPsessionID\": 2000,\n \"physicalTSPort\": 2000,\n \"physicalTSSourceAddress\": \"0.0.0.0\",\n \"physicalTSID\": \"1\",\n \"physicalTSVirtualQamIndex\": 1,\n \"physicalTSOperationalMode\": \"Broadcast\",\n \"tsConfiguredBitrate\": 20000000,\n \"actualBitrate\": 2258136,\n \"physicalTSPercentageUtilization\": 11,\n \"numOfPrograms\": 1,\n \"ccErrors\": 2,\n \"physicalTSOutputPktCounter\": 116561344,\n \"PhysicalTSTotalDrops\": 0,\n \"timestamp\": 1655715006\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Monitoring",
    "name": "GetRestapiV4MonitoringSourceTsTsid",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/monitoring/:source/ts/:tsId"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/restapi/v4/monitoring/input/eit/:tsInId[?reqTime=token]",
    "title": "Input EIT monitoring",
    "version": "4.2.0",
    "name": "MonitoringEIT",
    "group": "Monitoring",
    "description": "<p>Get input transport's EIT in two phases.<br/>Phase 1 - request and get a reqTime token for 2nd phase.<br/>Phase 2 - sent reqTime to recieve EIT (Empty response in phase 2 means table isn't ready yet).</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tsInId",
            "description": "<p>Unique numeric string field idendifier for input transport</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "reqTime",
            "description": "<p>Should be sent only in phase two</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reqTime",
            "description": "<ul> <li>token to send in second phase</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "EIT Monitoring - Phase 1",
          "content": "{\n  \"reqTime\": 1699362118\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Monitoring",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/monitoring/input/eit/:tsInId[?reqTime=token]"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/restapi/v4/monitoring/input/sdt/:tsInId/:mpegSrvId/:sdtPidNumber",
    "title": "Input SDT monitoring",
    "version": "4.2.0",
    "name": "MonitoringSDT",
    "group": "Monitoring",
    "description": "<p>Get SDT info</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tsInId",
            "description": "<p>Unique numeric string field idendifier for input transport</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mpegSrvId",
            "description": "<p>Optional - If not supplied all the transport's SDT info will return in an array</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sdtPidNumber",
            "description": "<p>Optional - will default to 17(SDT PID) if not supplied<br/>PIDs other than 17 might need two calls seperated by 1 SDT generation cycle to get a valid response</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "sdtInfo",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "sdtInfo.sdtEitPresetFollow",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "sdtInfo.sdtEitScheduled",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"Free to Air\"",
              "\"Scrambled\"",
              "\"Follow Input\""
            ],
            "optional": false,
            "field": "sdtInfo.sdtFreeCaMode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sdtInfo.sdtProgramName",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sdtInfo.sdtProvider",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sdtInfo.sdtSrvType",
            "description": "<p>Service type number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"Undefined\"",
              "\"Not Running\"",
              "\"Status in a Few Seconds\"",
              "\"Pausing\"",
              "\"Running\"",
              "\"Reserved for future Use\""
            ],
            "optional": false,
            "field": "sdtInfo.sdtRunningStatus",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "sdtInfo.sdtDescriptorsList",
            "description": "<p>List</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sdtInfo.sdtDescriptorsList.sdtTag",
            "description": "<p>Hexadecimal String field</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sdtInfo.sdtDescriptorsList.sdtDescValue",
            "description": "<p>Hexadecimal String field (0-max descriptor length)</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "sdtInfo.mpegSrvId",
            "description": "<p>&quot;Service number&quot; Relevant only for array response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SDT Monitoring with service and PID supplied Response Example",
          "content": "{\n    \"sdtEitPresetFollow\": false,\n    \"sdtEitScheduled\": false,\n    \"sdtFreeCaMode\": \"Free to Air\",\n    \"sdtProgramName\": \"Prog1\",\n    \"sdtProvider\": \"Prov\",\n    \"sdtSrvType\": \"1\",\n    \"sdtRunningStatus\": \"Running\",\n    \"sdtDescriptorsList\": [\n        {\n            \"sdtTag\": \"48\",\n            \"sdtDescValue\": \"01084861726D6F6E69630D4963652D4167655F5372763031\"\n        },\n        {\n            \"sdtTag\": \"B\",\n            \"sdtDescValue\": \"656E6700\"\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "SDT Monitoring without service and PID supplied Response Example",
          "content": "[\n  {\n      \"sdtEitPresetFollow\": false,\n      \"sdtEitScheduled\": false,\n      \"sdtFreeCaMode\": \"Free to Air\",\n      \"sdtProgramName\": \"Prog1\",\n      \"sdtProvider\": \"Prov\",\n      \"sdtSrvType\": \"1\",\n      \"sdtRunningStatus\": \"Running\",\n      \"sdtDescriptorsList\": [\n          {\n              \"sdtTag\": \"48\",\n              \"sdtDescValue\": \"01084861726D6F6E69630D4963652D4167655F5372763031\"\n          },\n          {\n              \"sdtTag\": \"B\",\n              \"sdtDescValue\": \"656E6700\"\n          }\n      ],\n        \"mpegSrvId\": 1\n  },\n  {\n      \"sdtEitPresetFollow\": false,\n      \"sdtEitScheduled\": false,\n      \"sdtFreeCaMode\": \"Free to Air\",\n      \"sdtProgramName\": \"Prog2\",\n      \"sdtProvider\": \"Prov\",\n      \"sdtSrvType\": \"1\",\n      \"sdtRunningStatus\": \"Running\",\n      \"sdtDescriptorsList\": [\n          {\n              \"sdtTag\": \"48\",\n              \"sdtDescValue\": \"01084861726D6F6E69630D4963652D4167655F5372763031\"\n          }\n      ],\n      \"mpegSrvId\": 2\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Monitoring",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/monitoring/input/sdt/:tsInId/:mpegSrvId/:sdtPidNumber"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/restapi/v4/monitoring/:source/srt/:socketId[?resetCounters=1]",
    "title": "SRT socket",
    "version": "4.2.0",
    "name": "MonitoringSRT",
    "group": "Monitoring",
    "description": "<p>Get SRT socket status and statistics</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "input",
              "output"
            ],
            "optional": false,
            "field": "source",
            "description": "<p>Type of SRT socket</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "socketId",
            "description": "<p>Unique numeric string field</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "resetCounters",
            "description": "<p>1 resets SRT counters</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "Unavailable",
              "Connecting",
              "Connected",
              "Disconnecting"
            ],
            "optional": false,
            "field": "status.connectionState",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status.upTime",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status.localPort",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "Disabled",
              "Enabled"
            ],
            "optional": false,
            "field": "status.encryptionMode",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"Unsecured\"",
              "\"Securing\"",
              "\"Secured\"",
              "\"No Secret\"",
              "\"Bad Secret\""
            ],
            "optional": false,
            "field": "status.decryptionState",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status.roundTripTime",
            "description": "<p>Time of round trip</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status.bufferSize",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status.latency",
            "description": "<p>Latency</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status.linkBandwidth",
            "description": "<p>Link bandwidth</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "statistics",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "statistics.reconnections",
            "description": "<p>Number of reconnections</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statistics.lastReset",
            "description": "<p>Date of last reset</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statistics.callerStreamId",
            "description": "<p>Socket Stream ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "statistics.transmittedPackets",
            "description": "<p>Number of transmitted packets</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "statistics.senderLostPackets",
            "description": "<p>Number of lost packets</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "statistics.retransmittedPackets",
            "description": "<p>Number of retransmitted packets</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "statistics.receivedAckPackets",
            "description": "<p>Number of acknowledge packets recieved</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "statistics.receivedNakPackets",
            "description": "<p>Number of not acknowledge packets recieved</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "statistics.tooLateToSendDroppedPackets",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "SRT Monitoring Response Example",
          "content": "{\n  \"status\": {\n    \"connectionState\": \"Connecting\",\n    \"upTime\": 0,\n    \"localPort\": 0,\n    \"encryptionMode\": \"Disabled\",\n    \"decryptionState\": \"Unsecured\",\n    \"roundTripTime\": 0,\n    \"bufferSize\": 0,\n    \"latency\": 120,\n    \"linkBandwidth\": 0\n  },\n  \"statistics\": {\n    \"reconnections\": 0,\n    \"lastReset\": \"00/00/0000 00:00:00\",\n    \"transmittedPackets\": 0,\n    \"senderLostPackets\": 0,\n    \"retransmittedPackets\": 0,\n    \"receivedAckPackets\": 0,\n    \"receivedNakPackets\": 0,\n    \"tooLateToSendDroppedPackets\": 0,\n      \"callerStreamId\": \"Hello\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Monitoring",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/monitoring/:source/srt/:socketId[?resetCounters=1]"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/move/port/:id?to=:destId",
    "title": "Move port",
    "version": "4.2.0",
    "group": "Move",
    "description": "<p>Operation failure will result in application restart</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique String field (GbePort only)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destId",
            "description": "<p>port id to move to</p>"
          }
        ]
      }
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Move",
    "name": "PostRestapiV4MovePortIdToDestid",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/move/port/:id?to=:destId"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Create/Update Network",
    "version": "4.2.0",
    "group": "Network",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "network.id",
            "description": "<p>Unique String field - Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "network.tag",
            "description": "<p>network</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"6000000\""
            ],
            "optional": false,
            "field": "network.parentId",
            "description": "<p>String field linked to the Parent node/object (platform) – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"networks\""
            ],
            "optional": false,
            "field": "network.parentTag",
            "description": "<p>Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "network.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "network.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "network.parameters.networkID",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "network.parameters.description",
            "description": "<p>Alphanumeric field (e.g. &quot;NW-1&quot;, &quot;1&quot;, etc)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "network.parameters.tableVersion",
            "description": "<p>Automatic (D) / Override</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "network.parameters.descriptorsList",
            "description": "<p>List</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "network.parameters.descriptorsList.tag",
            "description": "<p>Hexadecimal String field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "network.parameters.descriptorsList.descValue",
            "description": "<p>Hexadecimal String field (0-496 descriptor length)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "network.parameters.logicalChannelNumberList",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "network.parameters.logicalChannelNumberList.mpegTSid",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "network.parameters.logicalChannelNumberList.nitValue",
            "description": "<p>NIT LCN descriptor value in hex</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "network.parameters.OverrideSetting",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "network.parameters.OverrideSetting.version",
            "description": "<p>Numeric field</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - create network",
          "content": "{   \n   \"tag\": \"network\",\n   \"parentId\": \"6000000\",\n   \"parentTag\": \"networks\",\n   \"action\": \"create\",\n   \"parameters\": {\n     \"networkID\": 1,\n     \"description\": \"NW-1\",\n     \"tableVersion\": \"Automatic\",\n     \"descriptorsList\": [\n        {\n          \"tag\": \"0A\",\n          \"descValue\":\"656E6700\"\n        }  \n      ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response Example - Created 201": [
          {
            "group": "Response Example - Created 201",
            "type": "String",
            "optional": false,
            "field": "Object",
            "description": "<p>ID of Created Network object</p>"
          }
        ]
      }
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Network",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Create/Update Out TS",
    "version": "4.2.0",
    "group": "Out_TS",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outTs.id",
            "description": "<p>Unique String field – Relevant for update/delete/get action</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outTs.tag",
            "description": "<p>outTS</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outTs.parentId",
            "description": "<p>String field linked to the Parent node/object (asiOutAP) – Relevant for Create action</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outTs.parentTag",
            "description": "<p>outSocket / asiOutAP / dvbT2MiGw  – Relevant for Create action</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outTs.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters.tables",
            "description": "<p>Depending the mode, the RestAPI will return just the relevant section - e.g. In PAT with Generate, RestAPI will return the patGen only (also validate  on SET just the patGen parameters)</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "outTs.parameters.destinationList",
            "description": "<p>(Read only) List of destinations (“Physical object Ids”) of the Master and Mirrors TS(s)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.dataTrack",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outTs.parameters.dataTrack.enable",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.dataTrack.maxVbvDelayIncrease",
            "description": "<p>120 (D)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.dataTrack.reservedBitrate",
            "description": "<p>10 (D)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.psigGen",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outTs.parameters.psigGen.enable",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.psigGen.port",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.psigGen.primaryClient",
            "description": "<p>None (D) / PSIPGenIp IP address format (IPv4)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.psigGen.backupClient",
            "description": "<p>None (D) / PSIPGenIp IP address format (IPv4)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.scrKey",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outTs.parameters.scrKey.enable",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.scrKey.fixedKey",
            "description": "<p>Hexadecimal field (maximum 32 characters and length must be a multiple of 2 characters)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.general.mpegTSid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.general.description",
            "description": "<p>Alphanumeric field (e.g. &quot;Socket X&quot;, &quot;Satellite TS&quot;, etc)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.general.networkid",
            "description": "<p>Numeric field (linked to the “network” tag section)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.general.origNetworkid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.general.tables",
            "description": "<p>PSI/SI (D) / PSI / PSIP / None</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outTs.parameters.general.mip",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.plp",
            "description": "<p>relevant only for PLP Output TS</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.plp.description",
            "description": "<p>Alphanumeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.plp.plpId",
            "description": "<p>Numeric field – (D: 0 - Range: 0-14 - Steps: 1)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.plp.plpType",
            "description": "<p>Data Type 1 (D)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.plp.groupId",
            "description": "<p>Numeric field – (D: 0 - Range: 0-255 - Steps: 1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.plp.bitrate",
            "description": "<p>Numeric field – (D: 5.091744 - Range: 0.25-2147483647 - Steps: 0.000001)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.plp.fecBlocks",
            "description": "<p>Numeric field – (D: 32 - Range: 1-2147483647 - Steps: 1)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.plp.interleavingMode",
            "description": "<p>Single T2 Frame (D) / Multi T2 Frame</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.plp.tiBlocksPerInterleavingFrame",
            "description": "<p>Numeric field – (D: 3 - Range: 1-255 - Steps: 1)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.plp.modulation",
            "description": "<p>QPSK / 16 QAM / 64 QAM / 256 QAM (D)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outTs.parameters.plp.constellationRotationEnabled",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.plp.ldpcCode",
            "description": "<p>1/3 / 2/5 / 1/2 / 3/5 (D) / 2/3 / 3/4 / 4/5 / 5/6</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.plp.issyMode",
            "description": "<p>Inactive / Short / Long (D)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.plp.fecFrameSize",
            "description": "<p>Frame Short (16200 bits) / Frame Normal (64800 bits) (D)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.plp.bbFrameHeaderMode",
            "description": "<p>Normal Mode / High Efficiency (D)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outTs.parameters.plp.nullPacketDeletionEnabled",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outTs.parameters.plp.t2MipInsertionEnabled",
            "description": "<p>false (D) / true</p>"
          }
        ],
        "PAT": [
          {
            "group": "PAT",
            "type": "String",
            "optional": false,
            "field": "outTs.id",
            "description": "<p>Unique String field – Relevant for update/delete/get action</p>"
          },
          {
            "group": "PAT",
            "type": "String",
            "optional": false,
            "field": "outTs.tag",
            "description": "<p>outTS</p>"
          },
          {
            "group": "PAT",
            "type": "String",
            "optional": false,
            "field": "outTs.parentId",
            "description": "<p>String field linked to the Parent node/object (asiOutAP) – Relevant for Create action</p>"
          },
          {
            "group": "PAT",
            "type": "String",
            "optional": false,
            "field": "outTs.parentTag",
            "description": "<p>outSocket / asiOutAP – Relevant for Create action</p>"
          },
          {
            "group": "PAT",
            "type": "String",
            "optional": false,
            "field": "outTs.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "PAT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters",
            "description": ""
          },
          {
            "group": "PAT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables",
            "description": "<p>Depending the mode, the RestAPI will return just the relevant section - e.g. In PAT with Generate, RestAPI will return the patGen only (also validate  on SET just the patGen parameters)</p>"
          },
          {
            "group": "PAT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.pat",
            "description": ""
          },
          {
            "group": "PAT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.pat.patMode",
            "description": "<p>None / Generate (D) / Pass</p>"
          },
          {
            "group": "PAT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.pat.patGen",
            "description": ""
          },
          {
            "group": "PAT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.pat.patGen.patRepRate",
            "description": "<p>Numeric field (D: 300)</p>"
          },
          {
            "group": "PAT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.pat.patGen.patTsId",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "PAT",
            "type": "Boolean",
            "optional": false,
            "field": "outTs.parameters.tables.pat.patGen.patOverride",
            "description": "<p>false (D) / true  - (true to override version , false to set the Version by the user)</p>"
          },
          {
            "group": "PAT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.pat.patGen.patVersion",
            "description": "<p>Numeric field  (D: 0)  - Relevant to Set (in case of Override false) or GET - In case Override is true it will return the user version, otherwise the device)</p>"
          },
          {
            "group": "PAT",
            "type": "Boolean",
            "optional": false,
            "field": "outTs.parameters.tables.pat.patGen.refNitInPat",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "PAT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.pat.patPass",
            "description": ""
          },
          {
            "group": "PAT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.pat.patPass.patSrcTSid",
            "description": "<p>String field which will be used to link to the Input TS object</p>"
          },
          {
            "group": "PAT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.pat.patPass.patSrcPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "PAT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.pat.patPass.patPresenceDet",
            "description": "<p>Disable / Enable (Valid Input) (D) / Enable (Always)</p>"
          },
          {
            "group": "PAT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.pat.patPass.patPresDur",
            "description": "<p>Numeric field  (D: 5)</p>"
          },
          {
            "group": "PAT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.pat.patPass.patDelay",
            "description": "<p>Numeric field  (D: 0)</p>"
          },
          {
            "group": "PAT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.pat.patPass.patMaxOutBitrate",
            "description": "<p>Disable (D) / Enable</p>"
          },
          {
            "group": "PAT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.pat.patPass.patMaxBitrate",
            "description": "<p>Numeric field  (D: 2000)</p>"
          }
        ],
        "PMT": [
          {
            "group": "PMT",
            "type": "String",
            "optional": false,
            "field": "outTs.id",
            "description": "<p>Unique String field – Relevant for update/delete/get action</p>"
          },
          {
            "group": "PMT",
            "type": "String",
            "optional": false,
            "field": "outTs.tag",
            "description": "<p>outTS</p>"
          },
          {
            "group": "PMT",
            "type": "String",
            "optional": false,
            "field": "outTs.parentId",
            "description": "<p>String field linked to the Parent node/object (asiOutAP) – Relevant for Create action</p>"
          },
          {
            "group": "PMT",
            "type": "String",
            "optional": false,
            "field": "outTs.parentTag",
            "description": "<p>outSocket / asiOutAP – Relevant for Create action</p>"
          },
          {
            "group": "PMT",
            "type": "String",
            "optional": false,
            "field": "outTs.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "PMT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters",
            "description": ""
          },
          {
            "group": "PMT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables",
            "description": "<p>Depending the mode, the RestAPI will return just the relevant section - e.g. In PAT with Generate, RestAPI will return the patGen only (also validate  on SET just the patGen parameters)</p>"
          },
          {
            "group": "PMT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.pmt",
            "description": ""
          },
          {
            "group": "PMT",
            "type": "String[]",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.pmtTagFilterList",
            "description": "<p>tag filters list of 2 hex characters. e.g. [&quot;0x08&quot;, &quot;0x0A&quot;, &quot;0xAA&quot;]</p>"
          },
          {
            "group": "PMT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList",
            "description": "<p>List</p>"
          },
          {
            "group": "PMT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.id",
            "description": "<p>Unique String field – Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "PMT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtMode",
            "description": "<p>None / Generate (D) / Pass / Regenetate / Conditional Generate</p>"
          },
          {
            "group": "PMT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtGen",
            "description": ""
          },
          {
            "group": "PMT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtGen.pmtRepRate",
            "description": "<p>Numeric field  (D: 333)</p>"
          },
          {
            "group": "PMT",
            "type": "Boolean",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtGen.pmtOverride",
            "description": "<p>false (D) / true  - (true to override version , false to set the Version by the user)</p>"
          },
          {
            "group": "PMT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtGen.pmtVersion",
            "description": "<p>Numeric field  (D: 0)  - Relevant to Set (in case of Override false) or GET - In case Override is true it will return the user version, otherwise the device)</p>"
          },
          {
            "group": "PMT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtGen.pmtDescriptorsList",
            "description": "<p>List</p>"
          },
          {
            "group": "PMT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtGen.pmtDescriptorsList.pmtTag",
            "description": "<p>Hexadecimal String field (max 2 characters)</p>"
          },
          {
            "group": "PMT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtGen.pmtDescriptorsList.pmtDescValue",
            "description": "<p>Hexadecimal String field (0-max descriptor length)</p>"
          },
          {
            "group": "PMT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtPass",
            "description": ""
          },
          {
            "group": "PMT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtPass.pmtSrcTSid",
            "description": "<p>String field which will be used to link to the Input TS object</p>"
          },
          {
            "group": "PMT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtPass.pmtSrcPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "PMT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtPass.pmtPresenceDet",
            "description": "<p>Disable / Enable (Valid Input) (D) / Enable (Always)</p>"
          },
          {
            "group": "PMT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtPass.pmtPresDur",
            "description": "<p>Numeric field  (D: 5)</p>"
          },
          {
            "group": "PMT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtPass.pmtDelay",
            "description": "<p>Numeric field   (D: 0)</p>"
          },
          {
            "group": "PMT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtPass.pmtMaxOutBitrate",
            "description": "<p>Disable (D) / Enable</p>"
          },
          {
            "group": "PMT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtPass.pmtMaxBitrate",
            "description": "<p>Numeric field    (D: 2000)</p>"
          },
          {
            "group": "PMT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtReGen",
            "description": ""
          },
          {
            "group": "PMT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtReGen.pmtRepRate",
            "description": "<p>Numeric field   (D: 333)</p>"
          },
          {
            "group": "PMT",
            "type": "Boolean",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtReGen.pmtOverride",
            "description": "<p>false (D) / true  - (true to override version , false to set the Version by the user)</p>"
          },
          {
            "group": "PMT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtReGen.pmtVersion",
            "description": "<p>Numeric field  (D: 0)  - Relevant to Set (in case of Override false) or GET - In case Override is true it will return the user version, otherwise the device)</p>"
          },
          {
            "group": "PMT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtReGen.pmtSrcTSid",
            "description": "<p>String field which will be used to link to the Input TS object</p>"
          },
          {
            "group": "PMT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtReGen.pmtSrcPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "PMT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtReGen.pmtDescriptorsList",
            "description": "<p>List</p>"
          },
          {
            "group": "PMT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtReGen.pmtDescriptorsList.pmtTag",
            "description": "<p>Hexadecimal String field (max 2 characters)</p>"
          },
          {
            "group": "PMT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtReGen.pmtDescriptorsList.pmtDescValue",
            "description": "<p>Hexadecimal String field (0-max descriptor length)</p>"
          },
          {
            "group": "PMT",
            "type": "String[]",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtReGen.pmtBlockDescriptorsList",
            "description": "<p>PMT descriptor tags, in hex, to block.<br/>e.g. [&quot;0xA3&quot;, &quot;0x0B&quot;]</p>"
          },
          {
            "group": "PMT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtConditionGen",
            "description": ""
          },
          {
            "group": "PMT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtConditionGen.pmtDescriptorsList",
            "description": "<p>List</p>"
          },
          {
            "group": "PMT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtConditionGen.pmtDescriptorsList.pmtTag",
            "description": "<p>Hexadecimal String field (max 2 characters)</p>"
          },
          {
            "group": "PMT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtConditionGen.pmtDescriptorsList.pmtDescValue",
            "description": "<p>Hexadecimal String field (0-max descriptor length)</p>"
          },
          {
            "group": "PMT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtConditionGen.pmtRepRate",
            "description": "<p>Numeric field    (D: 333)</p>"
          },
          {
            "group": "PMT",
            "type": "Boolean",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtConditionGen.pmtOverride",
            "description": "<p>false (D) / true  - (true to override version , false to set the Version by the user)</p>"
          },
          {
            "group": "PMT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtConditionGen.pmtVersion",
            "description": "<p>Numeric field  (D: 0)  - Relevant to Set (in case of Override false) or GET - In case Override is true it will return the user version, otherwise the device)</p>"
          },
          {
            "group": "PMT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtConditionGen.pmtSrcTSid",
            "description": "<p>String field which will be used to link to the Input TS object</p>"
          },
          {
            "group": "PMT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pmtConditionGen.pmtSrcPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "PMT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pidList",
            "description": "<p>List</p>"
          },
          {
            "group": "PMT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pidList.id",
            "description": "<p>Unique String field Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "PMT",
            "type": "Integer",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pidList.pidPmtOrder",
            "description": "<p>PID order in PMT. Values should be unique and in range (1, &lt;number of streams under service&gt;]. If all PIDs under service are 0 then they are ordered by PID number.</p>"
          },
          {
            "group": "PMT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pidList.pidDescriptorsList",
            "description": "<p>List</p>"
          },
          {
            "group": "PMT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pidList.pidDescriptorsList.pidTag",
            "description": "<p>Hexadecimal String field (max 2 characters)</p>"
          },
          {
            "group": "PMT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pidList.pidDescriptorsList.pidDescValue",
            "description": "<p>Hexadecimal String field (0-max descriptor length)</p>"
          },
          {
            "group": "PMT",
            "type": "Boolean",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pidList.pidTrackInputDesc",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "PMT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pidList.pidTrackEnable",
            "description": ""
          },
          {
            "group": "PMT",
            "type": "Boolean",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pidList.pidTrackEnable.pidTrackInProg",
            "description": "<p>Hex Numeric field</p>"
          },
          {
            "group": "PMT",
            "type": "Boolean",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pidList.pidTrackEnable.pidTrackBlockCaDesc",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "PMT",
            "type": "Boolean",
            "optional": false,
            "field": "outTs.parameters.tables.pmt.serviceList.pidList.pidTrackEnable.pidTrackBlockStreamIdentifier",
            "description": "<p>false (D) / true</p>"
          }
        ],
        "SDT": [
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.id",
            "description": "<p>Unique String field – Relevant for update/delete/get action</p>"
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.tag",
            "description": "<p>outTS</p>"
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parentId",
            "description": "<p>String field linked to the Parent node/object (asiOutAP) – Relevant for Create action</p>"
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parentTag",
            "description": "<p>outSocket / asiOutAP – Relevant for Create action</p>"
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "SDT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters",
            "description": ""
          },
          {
            "group": "SDT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables",
            "description": "<p>Depending the mode, the RestAPI will return just the relevant section - e.g. In PAT with Generate, RestAPI will return the patGen only (also validate  on SET just the patGen parameters)</p>"
          },
          {
            "group": "SDT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.sdt",
            "description": ""
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtMode",
            "description": "<p>None / Generate (D) / Pass / ReGeneration</p>"
          },
          {
            "group": "SDT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtGen",
            "description": ""
          },
          {
            "group": "SDT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtGen.sdtRepRate",
            "description": "<p>Numeric field   (D: 500)</p>"
          },
          {
            "group": "SDT",
            "type": "Boolean",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtGen.sdtOverride",
            "description": "<p>false (D) / true  (true to override version , false to set the Version by the user)</p>"
          },
          {
            "group": "SDT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtGen.sdtVersion",
            "description": "<p>Numeric field  (D: 0)  Relevant to Set (in case of Override false) or GET In case Override is true it will return the user version, otherwise the device)</p>"
          },
          {
            "group": "SDT",
            "type": "Boolean",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtGen.sdtOther",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "SDT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtGen.serviceList",
            "description": "<p>List</p>"
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtGen.serviceList.id",
            "description": "<p>Unique String field Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtGen.serviceList.sdtIncludeInSdt",
            "description": "<p>Regenerate (D) / No / Generate</p>"
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtGen.serviceList.sdtProgramName",
            "description": "<p>Alphanumeric field</p>"
          },
          {
            "group": "SDT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtGen.serviceList.sdtSrvType",
            "description": "<p>Numeric field (Range from 0x0 to 0x255)</p>"
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtGen.serviceList.sdtProvider",
            "description": "<p>Alphanumeric field</p>"
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtGen.serviceList.sdtRunningStatus",
            "description": "<p>Undefined / Status in a Few Seconds / Pausing / Running (D) / Reserved for future Use</p>"
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtGen.serviceList.sdtFreeCaMode",
            "description": "<p>(0) Free to Air (D) / (1) Scrambled / Follow Input</p>"
          },
          {
            "group": "SDT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtGen.serviceList.sdtFollowInput",
            "description": ""
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtGen.serviceList.sdtSrcTSid.sdtFollowInput",
            "description": "<p>String field which will be used to link to the Input TS object</p>"
          },
          {
            "group": "SDT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtGen.serviceList.sdtSrcPid.sdtFollowInput",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "SDT",
            "type": "Boolean",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtGen.serviceList.sdtEitScheduled",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "SDT",
            "type": "Boolean",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtGen.serviceList.sdtEitPresetFollow",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "SDT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtGen.serviceList.sdtDescriptorsList",
            "description": "<p>List</p>"
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtGen.serviceList.sdtDescriptorsList.sdtTag",
            "description": "<p>Hexadecimal String field (max 2 characters)</p>"
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtGen.serviceList.sdtDescriptorsList.sdtDescValue",
            "description": "<p>Hexadecimal String field (0-max descriptor length)</p>"
          },
          {
            "group": "SDT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtPass",
            "description": ""
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtPass.sdtSrcTSid",
            "description": "<p>String field which will be used to link to the Input TS object</p>"
          },
          {
            "group": "SDT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtPass.sdtSrcPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtPass.sdtPresenceDet",
            "description": "<p>Disable / Enable (Valid Input) (D) / Enable (Always)</p>"
          },
          {
            "group": "SDT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtPass.sdtPresDur",
            "description": "<p>Numeric field   (D: 5)</p>"
          },
          {
            "group": "SDT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtPass.sdtDelay",
            "description": "<p>Numeric field   (D: 0)</p>"
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtPass.sdtMaxOutBitrate",
            "description": "<p>Disable (D) / Enable</p>"
          },
          {
            "group": "SDT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtPass.sdtMaxBitrate",
            "description": "<p>Numeric field   (D: 2000)</p>"
          },
          {
            "group": "SDT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtReGen",
            "description": ""
          },
          {
            "group": "SDT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtReGen.sdtRepRate",
            "description": "<p>Numeric field   (D: 500)</p>"
          },
          {
            "group": "SDT",
            "type": "Boolean",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtReGen.sdtOverride",
            "description": "<p>false (D) / true  (true to override version , false to set the Version by the user)</p>"
          },
          {
            "group": "SDT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtReGen.sdtVersion",
            "description": "<p>Numeric field  (D: 0)  Relevant to Set (in case of Override false) or GET In case Override is true it will return the user version, otherwise the device)</p>"
          },
          {
            "group": "SDT",
            "type": "Boolean",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtReGen.sdtOther",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "SDT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtReGen.serviceList",
            "description": "<p>List</p>"
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtReGen.serviceList.id",
            "description": "<p>Unique String field Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtReGen.serviceList.sdtSrvType",
            "description": "<p>(read field only)</p>"
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtReGen.serviceList.sdtProvider",
            "description": "<p>(read field only)</p>"
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtReGen.serviceList.sdtRunningStatus",
            "description": "<p>(read field only)</p>"
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtReGen.serviceList.sdtFreeCaMode",
            "description": "<p>(read field only)</p>"
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtReGen.serviceList.sdtEitScheduled",
            "description": "<p>(read field only)</p>"
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtReGen.serviceList.sdtEitPresetFollow",
            "description": "<p>(read field only)</p>"
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtReGen.serviceList.sdtSrcTSid",
            "description": "<p>String field which will be used to link to the Input TS object</p>"
          },
          {
            "group": "SDT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtReGen.serviceList.sdtScrProgram",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "SDT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtReGen.serviceList.sdtSrcPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "SDT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtReGen.serviceList.sdtDescriptorsList",
            "description": "<p>List</p>"
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtReGen.serviceList.sdtDescriptorsList.sdtTag",
            "description": "<p>Hexadecimal String field (max 2 characters)</p>"
          },
          {
            "group": "SDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtReGen.serviceList.sdtDescriptorsList.sdtDescValue",
            "description": "<p>Hexadecimal String field (0-max descriptor length)</p>"
          },
          {
            "group": "SDT",
            "type": "String[]",
            "optional": false,
            "field": "outTs.parameters.tables.sdt.sdtReGen.serviceList.sdtBlockDescriptorsList",
            "description": "<p>SDT descriptor tags, in hex, to block.<br/>e.g. [&quot;0xA3&quot;, &quot;0x0B&quot;]</p>"
          }
        ],
        "CAT": [
          {
            "group": "CAT",
            "type": "String",
            "optional": false,
            "field": "outTs.id",
            "description": "<p>Unique String field – Relevant for update/delete/get action</p>"
          },
          {
            "group": "CAT",
            "type": "String",
            "optional": false,
            "field": "outTs.tag",
            "description": "<p>outTS</p>"
          },
          {
            "group": "CAT",
            "type": "String",
            "optional": false,
            "field": "outTs.parentId",
            "description": "<p>String field linked to the Parent node/object (asiOutAP) – Relevant for Create action</p>"
          },
          {
            "group": "CAT",
            "type": "String",
            "optional": false,
            "field": "outTs.parentTag",
            "description": "<p>outSocket / asiOutAP – Relevant for Create action</p>"
          },
          {
            "group": "CAT",
            "type": "String",
            "optional": false,
            "field": "outTs.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "CAT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters",
            "description": ""
          },
          {
            "group": "CAT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters.tables",
            "description": "<p>Depending the mode, the RestAPI will return just the relevant section - e.g. In PAT with Generate, RestAPI will return the patGen only (also validate  on SET just the patGen parameters)</p>"
          },
          {
            "group": "CAT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.cat",
            "description": ""
          },
          {
            "group": "CAT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.catMode",
            "description": "<p>None / Generate (D) / Pass</p>"
          },
          {
            "group": "CAT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.catGen",
            "description": ""
          },
          {
            "group": "CAT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.catGen.catRepRate",
            "description": "<p>Numeric field   (D: 500)</p>"
          },
          {
            "group": "CAT",
            "type": "Boolean",
            "optional": false,
            "field": "outTs.parameters.tables.catGen.catOverride",
            "description": "<p>false (D) / true  (true to override version , false to set the Version by the user)</p>"
          },
          {
            "group": "CAT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.catGen.catVersion",
            "description": "<p>Numeric field  (D: 0)  Relevant to Set (in case of Override false) or GET In case Override is true it will return the user version, otherwise the device)</p>"
          },
          {
            "group": "CAT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters.tables.catGen.catDescriptorsList",
            "description": "<p>List</p>"
          },
          {
            "group": "CAT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.catGen.catDescriptorsList.catCasId",
            "description": "<p>Hex Numeric field</p>"
          },
          {
            "group": "CAT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.catGen.catDescriptorsList.catPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "CAT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.catGen.catDescriptorsList.catPrivData",
            "description": "<p>Hex Numeric field</p>"
          },
          {
            "group": "CAT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.catPass",
            "description": ""
          },
          {
            "group": "CAT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.catPass.catSrcTSid",
            "description": "<p>String field which will be used to link to the Input TS object</p>"
          },
          {
            "group": "CAT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.catPass.catSrcPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "CAT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.catPass.catPresenceDet",
            "description": "<p>Disable / Enable (Valid Input) (D) / Enable (Always)</p>"
          },
          {
            "group": "CAT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.catPass.catPresDur",
            "description": "<p>Numeric field   (D: 5)</p>"
          },
          {
            "group": "CAT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.catPass.catDelay",
            "description": "<p>Numeric field   (D: 0)</p>"
          },
          {
            "group": "CAT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.catPass.catMaxOutBitrate",
            "description": "<p>Disable (D) / Enable</p>"
          },
          {
            "group": "CAT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.catPass.catMaxBitrate",
            "description": "<p>Numeric field   (D: 2000)</p>"
          }
        ],
        "NIT": [
          {
            "group": "NIT",
            "type": "String",
            "optional": false,
            "field": "outTs.id",
            "description": "<p>Unique String field – Relevant for update/delete/get action</p>"
          },
          {
            "group": "NIT",
            "type": "String",
            "optional": false,
            "field": "outTs.tag",
            "description": "<p>outTS</p>"
          },
          {
            "group": "NIT",
            "type": "String",
            "optional": false,
            "field": "outTs.parentId",
            "description": "<p>String field linked to the Parent node/object (asiOutAP) – Relevant for Create action</p>"
          },
          {
            "group": "NIT",
            "type": "String",
            "optional": false,
            "field": "outTs.parentTag",
            "description": "<p>outSocket / asiOutAP – Relevant for Create action</p>"
          },
          {
            "group": "NIT",
            "type": "String",
            "optional": false,
            "field": "outTs.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "NIT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters",
            "description": ""
          },
          {
            "group": "NIT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters.tables",
            "description": "<p>Depending the mode, the RestAPI will return just the relevant section - e.g. In PAT with Generate, RestAPI will return the patGen only (also validate  on SET just the patGen parameters)</p>"
          },
          {
            "group": "NIT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.nit",
            "description": ""
          },
          {
            "group": "NIT",
            "type": "Boolean",
            "optional": false,
            "field": "outTs.parameters.tables.nit.refNitInPat",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "NIT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.nit.nitMode",
            "description": "<p>None / Generate (D) / Pass</p>"
          },
          {
            "group": "NIT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.nit.nitGen",
            "description": ""
          },
          {
            "group": "NIT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.nit.nitGen.nitRepRate",
            "description": "<p>Numeric field   (D: 500)</p>"
          },
          {
            "group": "NIT",
            "type": "Boolean",
            "optional": false,
            "field": "outTs.parameters.tables.nit.nitGen.nitOther",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "NIT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters.tables.nit.nitGen.nitDescriptorsList",
            "description": "<p>List</p>"
          },
          {
            "group": "NIT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.nit.nitGen.nitDescriptorsList.nitTag",
            "description": "<p>Hexadecimal String field (max 2 characters)</p>"
          },
          {
            "group": "NIT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.nit.nitPass",
            "description": ""
          },
          {
            "group": "NIT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.nit.nitPass.nitSrcTSid",
            "description": "<p>String field which will be used to link to the Input TS object</p>"
          },
          {
            "group": "NIT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.nit.nitPass.nitSrcPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "NIT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.nit.nitPass.nitPresenceDet",
            "description": "<p>Disable / Enable (Valid Input) (D) / Enable (Always)</p>"
          },
          {
            "group": "NIT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.nit.nitPass.nitPresDur",
            "description": "<p>Numeric field   (D: 5)</p>"
          },
          {
            "group": "NIT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.nit.nitPass.nitDelay",
            "description": "<p>Numeric field   (D: 0)</p>"
          },
          {
            "group": "NIT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.nit.nitPass.nitMaxOutBitrate",
            "description": "<p>Disable (D) / Enable</p>"
          },
          {
            "group": "NIT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.nit.nitPass.nitMaxBitrate",
            "description": "<p>Numeric field   (D: 2000)</p>"
          }
        ],
        "EIT": [
          {
            "group": "EIT",
            "type": "String",
            "optional": false,
            "field": "outTs.id",
            "description": "<p>Unique String field – Relevant for update/delete/get action</p>"
          },
          {
            "group": "EIT",
            "type": "String",
            "optional": false,
            "field": "outTs.tag",
            "description": "<p>outTS</p>"
          },
          {
            "group": "EIT",
            "type": "String",
            "optional": false,
            "field": "outTs.parentId",
            "description": "<p>String field linked to the Parent node/object (asiOutAP) – Relevant for Create action</p>"
          },
          {
            "group": "EIT",
            "type": "String",
            "optional": false,
            "field": "outTs.parentTag",
            "description": "<p>outSocket / asiOutAP – Relevant for Create action</p>"
          },
          {
            "group": "EIT",
            "type": "String",
            "optional": false,
            "field": "outTs.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "EIT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters",
            "description": ""
          },
          {
            "group": "EIT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters.tables",
            "description": "<p>Depending the mode, the RestAPI will return just the relevant section - e.g. In PAT with Generate, RestAPI will return the patGen only (also validate  on SET just the patGen parameters)</p>"
          },
          {
            "group": "EIT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.eit",
            "description": ""
          },
          {
            "group": "EIT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitMode",
            "description": "<p>None (D) / Re-Generate  / Pass / Conversion</p>"
          },
          {
            "group": "EIT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitReGen",
            "description": ""
          },
          {
            "group": "EIT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitReGen.eitRepRate",
            "description": "<p>Configurable  (D) / Follow Input</p>"
          },
          {
            "group": "EIT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitReGen.eitConfRate",
            "description": ""
          },
          {
            "group": "EIT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitReGen.eitConfRate.eitPresentRate",
            "description": "<p>Numeric field    (D: 500)</p>"
          },
          {
            "group": "EIT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitReGen.eitConfRate.eitScheduleRate",
            "description": "<p>Numeric field  (D: 6000)</p>"
          },
          {
            "group": "EIT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitReGen.eitOtherMode",
            "description": "<p>None (D) / Re-Generate  / Pass</p>"
          },
          {
            "group": "EIT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitReGen.eitOtherReGen.eitOtherPresentRate",
            "description": "<p>Numeric field    (D: 5000)</p>"
          },
          {
            "group": "EIT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitReGen.eitOtherReGen.eitOtherScheduleRate",
            "description": "<p>Numeric field  (D: 6000)</p>"
          },
          {
            "group": "EIT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitReGen.eitOtherPass.eitOtherSrcPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "EIT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitReGen.eitOtherPass.eitOtherSrcTSid",
            "description": "<p>String field which will be used to link to the Input TS object</p>"
          },
          {
            "group": "EIT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitReGen.eitServices",
            "description": ""
          },
          {
            "group": "EIT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitReGen.eitServices.eitSubTable",
            "description": "<p>&quot;Present/Following Only&quot; or &quot;Present/Following and Schedule Events&quot;</p>"
          },
          {
            "group": "EIT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitReGen.eitServices.eitInputTs",
            "description": "<p>Input TS Object ID</p>"
          },
          {
            "group": "EIT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitReGen.eitServices.eitInputPid",
            "description": "<p>Input PID Numeric field (0-8190)</p>"
          },
          {
            "group": "EIT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitReGen.eitServices.eitInputProgram",
            "description": "<p>Input Program Numeric field (0-65535)</p>"
          },
          {
            "group": "EIT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitReGen.eitServices.eitUseEventInfoFrom",
            "description": "<p>Actual/Other</p>"
          },
          {
            "group": "EIT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitReGen.eitServices.eitOtherInputTs",
            "description": "<p>Input TS MPEG Numeric Number (0-65535)</p>"
          },
          {
            "group": "EIT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitReGen.eitServices.eitOtherInputNetwork",
            "description": "<p>Network Numeric Number (0-65535)</p>"
          },
          {
            "group": "EIT",
            "type": "String[]",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitReGen.eitServices.eitBlockDescriptorsList",
            "description": "<p>EIT descriptor tags, in hex, to block.<br/>e.g. [&quot;0xA3&quot;, &quot;0x0B&quot;]</p>"
          },
          {
            "group": "EIT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitReGen.eitServices.eitDescriptorsList",
            "description": "<p>List</p>"
          },
          {
            "group": "EIT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitReGen.eitServices.eitDescriptorsList.eitTag",
            "description": "<p>Hexadecimal String field (max 2 characters)</p>"
          },
          {
            "group": "EIT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitReGen.eitServices.eitDescriptorsList.eitDescValue",
            "description": "<p>Hexadecimal String field (0-max descriptor length)</p>"
          },
          {
            "group": "EIT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitPass.eitSrcTSid",
            "description": "<p>String field which will be used to link to the Input TS object</p>"
          },
          {
            "group": "EIT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitPass.eitSrcPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "EIT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitPass.eitPresenceDet",
            "description": "<p>Disable / Enable (Valid Input) (D) / Enable (Always)</p>"
          },
          {
            "group": "EIT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitPass.eitPresDur",
            "description": "<p>Numeric field   (D: 5)</p>"
          },
          {
            "group": "EIT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitPass.eitDelay",
            "description": "<p>Numeric field   (D: 0)</p>"
          },
          {
            "group": "EIT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitPass.eitMaxOutBitrate",
            "description": "<p>Disable (D) / Enable</p>"
          },
          {
            "group": "EIT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitPass.eitMaxBitrate",
            "description": "<p>Numeric field   (D: 2000)</p>"
          },
          {
            "group": "EIT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitconversion",
            "description": ""
          },
          {
            "group": "EIT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitconversion.eitSrcTSid",
            "description": "<p>String field which will be used to link to the Input TS object</p>"
          },
          {
            "group": "EIT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitconversion.eitSrcPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "EIT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitReGen.eitOtherReGen",
            "description": ""
          },
          {
            "group": "EIT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitReGen.eitOtherPass",
            "description": ""
          },
          {
            "group": "EIT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.eit.eitPass",
            "description": ""
          }
        ],
        "TDT": [
          {
            "group": "TDT",
            "type": "String",
            "optional": false,
            "field": "outTs.id",
            "description": "<p>Unique String field – Relevant for update/delete/get action</p>"
          },
          {
            "group": "TDT",
            "type": "String",
            "optional": false,
            "field": "outTs.tag",
            "description": "<p>outTS</p>"
          },
          {
            "group": "TDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parentId",
            "description": "<p>String field linked to the Parent node/object (asiOutAP) – Relevant for Create action</p>"
          },
          {
            "group": "TDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parentTag",
            "description": "<p>outSocket / asiOutAP – Relevant for Create action</p>"
          },
          {
            "group": "TDT",
            "type": "String",
            "optional": false,
            "field": "outTs.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "TDT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters",
            "description": ""
          },
          {
            "group": "TDT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters.tables",
            "description": "<p>Depending the mode, the RestAPI will return just the relevant section - e.g. In PAT with Generate, RestAPI will return the patGen only (also validate  on SET just the patGen parameters)</p>"
          },
          {
            "group": "TDT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.tdt",
            "description": ""
          },
          {
            "group": "TDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.tdt.tdtMode",
            "description": "<p>None (D) / Generate  / Pass /</p>"
          },
          {
            "group": "TDT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.tdt.tdtGen",
            "description": ""
          },
          {
            "group": "TDT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.tdt.tdtGen.tdtRepRate",
            "description": "<p>(D: 4000 - Steps: 800ms)</p>"
          },
          {
            "group": "TDT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.tdt.tdtPass",
            "description": ""
          },
          {
            "group": "TDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.tdt.tdtPass.tdtSrcTSid",
            "description": "<p>String field which will be used to link to the Input TS object</p>"
          },
          {
            "group": "TDT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.tdt.tdtPass.tdtSrcPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "TDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.tdt.tdtPass.tdtPresenceDet",
            "description": "<p>Disable / Enable (Valid Input) (D) / Enable (Always)</p>"
          },
          {
            "group": "TDT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.tdt.tdtPass.tdtPresDur",
            "description": "<p>Numeric field   (D: 5)</p>"
          },
          {
            "group": "TDT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.tdt.tdtPass.tdtDelay",
            "description": "<p>Numeric field   (D: 0)</p>"
          },
          {
            "group": "TDT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.tdt.tdtPass.tdtMaxOutBitrate",
            "description": "<p>Disable (D) / Enable</p>"
          },
          {
            "group": "TDT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.tdt.tdtPass.tdtMaxBitrate",
            "description": "<p>Numeric field  (D: 2000)</p>"
          }
        ],
        "TOT": [
          {
            "group": "TOT",
            "type": "String",
            "optional": false,
            "field": "outTs.id",
            "description": "<p>Unique String field – Relevant for update/delete/get action</p>"
          },
          {
            "group": "TOT",
            "type": "String",
            "optional": false,
            "field": "outTs.tag",
            "description": "<p>outTS</p>"
          },
          {
            "group": "TOT",
            "type": "String",
            "optional": false,
            "field": "outTs.parentId",
            "description": "<p>String field linked to the Parent node/object (asiOutAP) – Relevant for Create action</p>"
          },
          {
            "group": "TOT",
            "type": "String",
            "optional": false,
            "field": "outTs.parentTag",
            "description": "<p>outSocket / asiOutAP – Relevant for Create action</p>"
          },
          {
            "group": "TOT",
            "type": "String",
            "optional": false,
            "field": "outTs.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "TOT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters",
            "description": ""
          },
          {
            "group": "TOT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters.tables",
            "description": "<p>Depending the mode, the RestAPI will return just the relevant section - e.g. In PAT with Generate, RestAPI will return the patGen only (also validate  on SET just the patGen parameters)</p>"
          },
          {
            "group": "TOT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.tot",
            "description": ""
          },
          {
            "group": "TOT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.tot.totMode",
            "description": "<p>None / Generate (D) / Pass</p>"
          },
          {
            "group": "TOT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.tot.totGen",
            "description": ""
          },
          {
            "group": "TOT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.tot.totGen.totRepRate",
            "description": "<p>(D: 4000 - Steps: 800ms)</p>"
          },
          {
            "group": "TOT",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters.tables.tot.totGen.totDescriptorsList",
            "description": "<p>List</p>"
          },
          {
            "group": "TOT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.tot.totGen.totDescriptorsList.totCountryCode",
            "description": "<p>String field (3 capital letters,  e.g. &quot;AFG)</p>"
          },
          {
            "group": "TOT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.tot.totGen.totDescriptorsList.totCountryRegion",
            "description": "<p>Integer field (0-60)</p>"
          },
          {
            "group": "TOT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.tot.totGen.totDescriptorsList.totLocalOffset",
            "description": "<p>String field (Time formal with sign. e.g. &quot;-06:00&quot;)</p>"
          },
          {
            "group": "TOT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.tot.totGen.totDescriptorsList.totDateChange",
            "description": "<p>String field (Date format (e.g. 4/21/2023)</p>"
          },
          {
            "group": "TOT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.tot.totGen.totDescriptorsList.totTimeChange",
            "description": "<p>String field (Time format with seconds e.g. &quot;11:32:21&quot;)</p>"
          },
          {
            "group": "TOT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.tot.totGen.totDescriptorsList.totNextOffset",
            "description": "<p>String field (Time formal with sign. e.g. &quot;-06:00&quot;)</p>"
          },
          {
            "group": "TOT",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.tot.totPass",
            "description": ""
          },
          {
            "group": "TOT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.tot.totPass.totSrcTSid",
            "description": "<p>String field which will be used to link to the Input TS object</p>"
          },
          {
            "group": "TOT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.tot.totPass.totSrcPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "TOT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.tot.totPass.totPresenceDet",
            "description": "<p>Disable / Enable (Valid Input) (D) / Enable (Always)</p>"
          },
          {
            "group": "TOT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.tot.totPass.totPresDur",
            "description": "<p>Numeric field   (D: 5)</p>"
          },
          {
            "group": "TOT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.tot.totPass.totDelay",
            "description": "<p>Numeric field    (D: 0)</p>"
          },
          {
            "group": "TOT",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.tot.totPass.totMaxOutBitrate",
            "description": "<p>Disable (D) / Enable</p>"
          },
          {
            "group": "TOT",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.tot.totPass.totMaxBitrate",
            "description": "<p>Numeric field   (D: 2000)</p>"
          }
        ],
        "MIP": [
          {
            "group": "MIP",
            "type": "String",
            "optional": false,
            "field": "outTs.id",
            "description": "<p>Unique String field – Relevant for update/delete/get action</p>"
          },
          {
            "group": "MIP",
            "type": "String",
            "optional": false,
            "field": "outTs.tag",
            "description": "<p>outTS</p>"
          },
          {
            "group": "MIP",
            "type": "String",
            "optional": false,
            "field": "outTs.parentId",
            "description": "<p>String field linked to the Parent node/object (asiOutAP) – Relevant for Create action</p>"
          },
          {
            "group": "MIP",
            "type": "String",
            "optional": false,
            "field": "outTs.parentTag",
            "description": "<p>outSocket / asiOutAP – Relevant for Create action</p>"
          },
          {
            "group": "MIP",
            "type": "String",
            "optional": false,
            "field": "outTs.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "MIP",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters",
            "description": ""
          },
          {
            "group": "MIP",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters.tables",
            "description": "<p>Depending the mode, the RestAPI will return just the relevant section - e.g. In PAT with Generate, RestAPI will return the patGen only (also validate  on SET just the patGen parameters)</p>"
          },
          {
            "group": "MIP",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.mip",
            "description": ""
          },
          {
            "group": "MIP",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.mip.mipMode",
            "description": "<p>None (D) / Generate</p>"
          },
          {
            "group": "MIP",
            "type": "Object",
            "optional": false,
            "field": "outTs.parameters.tables.mip.mipGen",
            "description": ""
          },
          {
            "group": "MIP",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.mip.mipGen.mipBitrate",
            "description": "<p>(read field only)</p>"
          },
          {
            "group": "MIP",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.mip.mipGen.mipMaxDelay",
            "description": "<p>Numeric field   (D: 0, R:0-1000, S:0.0001)</p>"
          },
          {
            "group": "MIP",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.mip.mipGen.mipConst",
            "description": "<p>QPSK, 16-QAM,  64-QAM (D)</p>"
          },
          {
            "group": "MIP",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.mip.mipGen.mipInterleaving",
            "description": "<p>Native interleaver (D), In-depth interleaver</p>"
          },
          {
            "group": "MIP",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.mip.mipGen.mipHierarchy",
            "description": "<p>Non-Hierarchical (D), Alpha=1, Alpha=2, Alpha=4</p>"
          },
          {
            "group": "MIP",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.mip.mipGen.mipCodeRate",
            "description": "<p>1/2, 2/3, 3/4 (D), 5/6, 7/8</p>"
          },
          {
            "group": "MIP",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.mip.mipGen.mipGuardInterval",
            "description": "<p>1/32, 1/16, 1/8 (D), 1/4</p>"
          },
          {
            "group": "MIP",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.mip.mipGen.mipTransMode",
            "description": "<p>2K (D), 4K, 8K</p>"
          },
          {
            "group": "MIP",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.mip.mipGen.mipBandwidthRF",
            "description": "<p>5, 6, 7, 8 (D)</p>"
          },
          {
            "group": "MIP",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.mip.mipGen.mipTsPriority",
            "description": "<p>Low Priority TS, Non-Hierarchical or High Priority TS (D)</p>"
          },
          {
            "group": "MIP",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters.tables.mip.mipGen.mipSfnTxList",
            "description": "<p>List</p>"
          },
          {
            "group": "MIP",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.mip.mipGen.mipSfnTxList.id",
            "description": "<p>Unique String field Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "MIP",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.mip.mipGen.mipSfnTxList.txIdentifier",
            "description": "<p>Numeric field  (D: 0)</p>"
          },
          {
            "group": "MIP",
            "type": "Object[]",
            "optional": false,
            "field": "outTs.parameters.tables.mip.mipGen.mipSfnTxList.mipFunctionList",
            "description": "<p>List</p>"
          },
          {
            "group": "MIP",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.mip.mipGen.mipSfnTxList.mipFunctionList.id",
            "description": "<p>Unique String field Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "MIP",
            "type": "String",
            "optional": false,
            "field": "outTs.parameters.tables.mip.mipGen.mipSfnTxList.mipFunctionList.mipFunction",
            "description": "<p>Tx_time_offset function, Tx_frequency_offset function, Tx_power function, Private_data function, Cell_id function, Enable_function, Bandwidth function</p>"
          },
          {
            "group": "MIP",
            "type": "Number",
            "optional": false,
            "field": "outTs.parameters.tables.mip.mipGen.mipSfnTxList.mipFunctionList.mipFuntionData",
            "description": "<p>Numeric field</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example  - update outTs",
          "content": " {\n   \"id\": \"5000002\",\n   \"tag\": \"outTs\",\n   \"action\": \"update\",\n   \"parentId\": \"450001\",\n   \"parentTag\": \"outSocket\",\n   \"parameters\": {\n       \"general\": {\n           \"description\": \"outTS template\",\n           \"mpegTSid\": 9,\n           \"tables\": \"PSI/SI\",\n           \"networkid\": 1,\n           \"origNetworkid\": 1\n       },\n       \"dataTrack\": {\n           \"enable\": false\n       },\n       \"psigGen\": {\n           \"enable\": false,\n           \"port\": 1327,\n           \"primaryClient\": \"None\",\n           \"backupClient\": \"None\"\n       },\n       \"scrKey\": {\n           \"enable\": false\n       },\n       \"tables\": {\n           \"pat\": {\n               \"patMode\": \"None\"\n           },\n           \"cat\": {\n               \"catMode\": \"None\"\n           },\n           \"sdt\": {\n               \"sdtMode\": \"None\"\n           },\n           \"tdt\": {\n               \"tdtMode\": \"None\"\n           },\n           \"tot\": {\n               \"totMode\": \"None\"\n           },\n           \"eit\": {\n               \"eitMode\": \"None\"\n           },\n           \"mip\": {\n               \"mipMode\": \"None\"\n           },\n           \"pmt\": {\n               \"serviceList\": []\n           },\n           \"nit\": {\n               \"nitMode\": \"None\"\n           }\n       }\n   }\n}",
          "type": "json"
        },
        {
          "title": "Request Example - create outTs",
          "content": "outTs must be created together with parent outSocket\n{   \n   \"tag\": \"outSocket\",\n   \"parentId\": \"34006\",\n   \"parentTag\": \"ipPort\",\n   \"action\": \"create\",\n   \"parameters\": {\n     \"general\": {\n       \"enable\": true,\n       \"description\": \"Socket X\",\n       \"ipType\": \"Unicast\",\n       \"ipVer\": \"IPv4\",\n      \"ipAddr\": \"10.20.1.177\",\n       \"udpPort\": 3001,\n       \"ssrcId\": 5030,\n       \"bitrateMode\": \"VBR Burst\",\n       \"bitrate\":20\n       },\n       \"advance\": {\n        \"ipPktSize\": 1128,\n        \"ttl\": 255,\n        \"operationalMode\": \"VoD\",\n        \"vodSettings\": {\n           \"qamID\": 1022,\n           \"interface\": 4002\n       }\n       },\n       \"sourceIP\": {\n          \"override\": true,\n          \"overrideSettings\": {\n              \"ipAddress\": \"1.1.1.1\",\n              \"port\": 2001\n         }\n       },\n       \"qos\": {\n           \"dscp\": 1\n       }\n   },\n     \"sons\": [\n       {\n        \"tag\": \"outTs\",\n        \"action\": \"create\",\n         \"parameters\": {\n          \"general\": {\n             \"description\": \"Output TS template\",\n              \"mpegTSid\": 4,\n               \"tables\": \"PSI\",\n                \"networkid\": 1,\n                 \"origNetworkid\": 3\n               }\n           }\n          }\n       ]\n}",
          "type": "json"
        },
        {
          "title": "Request Example - create PLP outTs",
          "content": "{\n  \"parentId\": \"50000001\",\n   \"parentTag\": \"dvbT2MiGw\",\n   \"tag\": \"outTs\",\n   \"action\": \"create\",\n   \"parameters\": {\n       \"general\": {\n           \"description\": \"PlpOutTs2\",\n           \"mpegTSid\": 3,\n           \"tables\": \"PSI/SI\",\n           \"networkid\": 1,\n           \"origNetworkid\": 1\n       },\n       \"plp\": {\n           \"description\": \"PlpOutTs2PlpDesc\",\n           \"plpId\": 3,\n           \"plpType\": \"Data Type 1\",\n           \"groupId\": 6,\n           \"fecBlocks\": 30,\n           \"interleavingMode\": \"Multi T2 Frame\",\n           \"tiBlocksPerInterleavingFrame\": 7,\n           \"modulation\": \"64 QAM\",\n           \"constellationRotationEnabled\": true,\n           \"ldpcCode\": \"1/2\",\n           \"issyMode\": \"Inactive\",\n           \"fecFrameSize\": \"Frame Short (16200 bits)\",\n           \"bbFrameHeaderMode\": \"Normal Mode\",\n           \"nullPacketDeletionEnabled\": true,\n           \"t2MipInsertionEnabled\": true\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response Example - Created 201": [
          {
            "group": "Response Example - Created 201",
            "type": "String",
            "optional": false,
            "field": "Object",
            "description": "<p>ID of created outTs object</p>"
          }
        ]
      }
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Out_TS",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Create/Update/Delete/Get Output Dvb T2Mi Gw",
    "version": "4.2.0",
    "group": "Output_Dvb_T2Mi_Gw",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dvbT2MiGw.id",
            "description": "<p>Unique String field - Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dvbT2MiGw.tag",
            "description": "<p>dvbT2MiGw</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dvbT2MiGw.parentId",
            "description": "<p>String field linked to the Parent node/object (outSrv) – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dvbT2MiGw.parentTag",
            "description": "<p>outSrv Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dvbT2MiGw.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "dvbT2MiGw.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.pid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.pid.t2MiPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.pid.timeStampMode",
            "description": "<p>Absolute / Relative (D)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.pid.t2miStreamId",
            "description": "<p>Numeric field – (D: 0 - Range: 0-7 - Steps: 1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.pid.networkDelay",
            "description": "<p>Numeric field – (D: 300 - Range: 0-5000 - Steps: 1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.pid.t2miDescriptor",
            "description": "<p>false / true (D)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.channel",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.channel.description",
            "description": "<p>Alphanumeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.channel.networkId",
            "description": "<p>Numeric field (D: 0, Integer Range)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.channel.t2SystemId",
            "description": "<p>Numeric field (D: 0, Integer Range)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.channel.cellId",
            "description": "<p>Numeric field (D: 0, Integer Range)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.channel.frequency",
            "description": "<p>Numeric field (D: 0, Range: 0-2000 - Steps: 0.00000 Decimal places:6)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.channel.t2Version",
            "description": "<p>1.1.1 / 1.2.1 / 1.3.1 (D)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.channel.rfChannel",
            "description": "<p>1.712 MHz / 5 MHz / 6 MHz / 7 MHz / 8 MHz (D) / 10 MHz</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.channel.misoMode",
            "description": "<p>SISO (D) / MISO / Non T2 Preamble</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.channel.fftMode",
            "description": "<p>1K Mode / 2K Mode / 4K Mode / 8K Mode / 16K Mode  / 32K Mode (D)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.channel.guardInterval",
            "description": "<p>1/128/ 1/32 / 1/16 (D) / 19/256 / 1/8 / 19/128 / 1/4</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.channel.pilotPattern",
            "description": "<p>Pilot Pattern 1 / Pilot Pattern 2 / Pilot Pattern 3 / Pilot Pattern 4 (D) / Pilot Pattern 5 / Pilot Pattern 6 / Pilot Pattern 7 / Pilot Pattern 8</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.channel.bwtExtension",
            "description": "<p>Normal (D) / Extended</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.channel.paprMode",
            "description": "<p>No PAPR (D) / ACE-PAPR / TR-PAPR / ACE &amp; TR</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.channel.l1Modualtion",
            "description": "<p>BPSK / QPSK / 16 QAM / 64 QAM (D)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.channel.l1Repetition",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.channel.l1PostScrambling",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.channel.inbandSignallingAllowed",
            "description": "<p>false / true (D)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.channel.numberOfFramesPerSuperFrame",
            "description": "<p>Numeric field (D: 2 - Range: 2-255 - Steps: 1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.channel.numberOfOfdmSymbolPerFrame",
            "description": "<p>Numeric field (D: 64 - Range: 4-64 - Steps: 1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.fef",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.fef.insertionEnabled",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.fef.type",
            "description": "<p>Numeric field (D: 0 - Range: 1-15 - Steps: 1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.fef.length",
            "description": "<p>Numeric field (D: 10000 - Range: 10000-4194303 - Steps: 1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dvbT2MiGw.parameters.general.fef.interval",
            "description": "<p>Numeric field (D: 1 - Range: 1-255 - Steps: 1)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - create dvbT2MiGw",
          "content": "{\n   \"tag\": \"dvbT2MiGw\",\n   \"parentId\": \"5300001\",\n   \"parentTag\": \"outSrv\",\n  \"action\": \"create\",\n   \"parameters\": {\n       \"general\": {\n           \"pid\": {\n               \"t2MiPid\": 4096,\n               \"timeStampMode\": \"Relative\",\n               \"t2miStreamId\": 1,\n               \"networkDelay\": 301,\n               \"t2miDescriptor\": false\n           },\n           \"channel\": {\n               \"description\": \"DvbT2Gateway\",\n               \"networkId\": 6,\n               \"t2SystemId\": 7,\n               \"cellId\": 8,\n               \"frequency\": 9,\n               \"t2Version\": \"1.2.1\",\n               \"rfChannel\": \"7 MHz\",\n               \"misoMode\": \"MISO\",\n               \"fftMode\": \"8K Mode\",\n               \"guardInterval\": \"19/256\",\n               \"pilotPattern\": \"Pilot Pattern 3\",\n               \"bwtExtension\": \"Extended\",\n               \"paprMode\": \"ACE-PAPR\",\n               \"l1Modualtion\": \"BPSK\",\n               \"l1Repetition\": true,\n               \"l1PostScrambling\": true,\n               \"inbandSignallingAllowed\": true,\n               \"numberOfFramesPerSuperFrame\": 4,\n               \"numberOfOfdmSymbolPerFrame\": 61\n           },\n           \"fef\": {\n               \"insertionEnabled\": false,\n               \"type\": 2,\n               \"length\": 10002,\n               \"interval\": 3\n           }\n       }\n   }\n}",
          "type": "json"
        },
        {
          "title": "Request Example - update dvbT2MiGw",
          "content": "{\n \"tag\": \"dvbT2MiGw\",\n \"id\": \"50000001\",\n \"action\": \"update\",\n \"parameters\": {\n   \"general\": {\n     \"pid\": {\n       \"t2MiPid\": 4096,\n       \"timeStampMode\": \"Absolute\",\n       \"t2miStreamId\": 0,\n       \"networkDelay\": 300,\n       \"t2miDescriptor\": true\n     },\n     \"channel\": {\n       \"description\": \"\",\n       \"networkId\": 0,\n       \"t2SystemId\": 0,\n       \"cellId\": 0,\n       \"frequency\": 0,\n       \"t2Version\": \"1.3.1\",\n       \"rfChannel\": \"8 MHz\",\n       \"misoMode\": \"SISO\",\n       \"fftMode\": \"32K Mode\",\n       \"guardInterval\": \"1/16\",\n       \"pilotPattern\": \"Pilot Pattern 4\",\n       \"bwtExtension\": \"Normal\",\n       \"paprMode\": \"No PAPR\",\n       \"l1Modualtion\": \"64 QAM\",\n       \"l1Repetition\": false,\n       \"l1PostScrambling\": false,\n       \"inbandSignallingAllowed\": true,\n       \"numberOfFramesPerSuperFrame\": 2,\n       \"numberOfOfdmSymbolPerFrame\": 64\n     },\n     \"fef\": {\n       \"insertionEnabled\": false,\n       \"type\": 0,\n       \"length\": 10000,\n       \"interval\": 1\n     }\n   }\n }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response Example - Created 201": [
          {
            "group": "Response Example - Created 201",
            "type": "String",
            "optional": false,
            "field": "Object",
            "description": "<p>ID of Created dvbT2MiGw object</p>"
          }
        ]
      }
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Output_Dvb_T2Mi_Gw",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Create/Update Output Generate DPI PID",
    "version": "4.2.0",
    "group": "Output_Generate_DPI_PID",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "generateDpi.id",
            "description": "<p>Unique String field - Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "generateDpi.tag",
            "description": "<p>generateDpi – Applicable for Generate DPI Pid</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "generateDpi.parentId",
            "description": "<p>String field linked to the Parent node/object (outSrv) – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "generateDpi.parentTag",
            "description": "<p>outSrv Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "generateDpi.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "generateDpi.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "generateDpi.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "generateDpi.parameters.general.outPid",
            "description": "<p>output PID value</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "generateDpi.parameters.general.sl10AgentIp",
            "description": "<p>SL10 Agent IP</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "generateDpi.parameters.general.sl10ContactNumber",
            "description": "<p>SL10 Contact Number</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "generateDpi.parameters.general.delay",
            "description": "<p>DPI delay (4000 - 65535)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "generateDpi.parameters.general.spliceReturnMode",
            "description": "<p>Splice Return Mode (SCTE 35 Duration Not Set / Enable Duration / Disable Duration)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "generateDpi.parameters.general.spliceCommand",
            "description": "<p>(Splice Immediate / Not Immediate)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "generateDpi.parameters.general.scte35Duration",
            "description": "<p>avail duration (0 - 65535, not relevant for &quot;Disable Duration&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "generateDpi.parameters.general.scte35AvailNum",
            "description": "<p>avail number (0 - 255)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - create generateDpi ",
          "content": "{\n  \"tag\": \"generateDpi\",\n  \"action\": \"create\",\n  \"parentTag\": \"outSrv\",\n  \"parentId\": \"5300001\",\n  \"parameters\": {\n    \"general\": {\n      \"outPid\": 33,\n      \"sl10AgentIp\": \"1.2.3.4\",\n      \"sl10ContactNumber\": 1,\n      \"delay\": 5000,\n      \"spliceReturnMode\": \"Enable Duration\",\n      \"spliceCommand\": \"Not Immediate\",\n      \"scte35Duration\": 0,\n      \"scte35AvailNum\": 2\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response Example - Created 201": [
          {
            "group": "Response Example - Created 201",
            "type": "String",
            "optional": false,
            "field": "Object",
            "description": "<p>ID of Created outPidRange object</p>"
          }
        ]
      }
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Output_Generate_DPI_PID",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Create/Update Output PID Range",
    "version": "4.2.0",
    "group": "Output_PID_Range",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outPidRange.id",
            "description": "<p>Unique String field - Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outPidRange.tag",
            "description": "<p>outPidRange – Applicable for Unreferenced Pid Ranges</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outPidRange.parentId",
            "description": "<p>String field linked to the Parent node/object (outTS) – Applicable for Unreferenced PIDs – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outPidRange.parentTag",
            "description": "<p>outTS – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outPidRange.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outPidRange.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outPidRange.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outPidRange.parameters.general.inTS",
            "description": "<ul> <li>String field which will be used to link to the Input TS object</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outPidRange.parameters.general.inFirstPid",
            "description": "<ul> <li>PID Numeric field (Decimal values) - (D: 0)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outPidRange.parameters.general.inLastPid",
            "description": "<ul> <li>PID Numeric field (Decimal values) - (D: 8190)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outPidRange.parameters.general.outFirstRemapPid",
            "description": "<ul> <li>PID Numeric field (Decimal values) - (D: 0)</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - create outPidRange",
          "content": "{   \n   \"tag\": \"outPidRange\",\n   \"action\": \"create\",\n   \"parentId\": \"5000001\",\n   \"parentTag\": \"outTs\",\n   \"parameters\": {\n       \"general\": {\n           \"inTs\": \"4000003\",\n           \"inFirstPid\": 1,\n           \"inLastPid\": 8190,\n           \"outFirstRemapPid\": 0\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response Example - Created 201": [
          {
            "group": "Response Example - Created 201",
            "type": "String",
            "optional": false,
            "field": "Object",
            "description": "<p>ID of Created outPidRange object</p>"
          }
        ]
      }
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Output_PID_Range",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Create/Update Output RSS",
    "version": "4.2.0",
    "group": "Output_RSS",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outRss.id",
            "description": "<p>Unique String field - Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outRss.tag",
            "description": "<p>outRss</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outRss.parentId",
            "description": "<p>String field linked to the Parent node/object (outSrv) – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outRss.parentTag",
            "description": "<p>outSrv Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outRss.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "outRss.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "outRss.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outRss.parameters.general.rssInTS",
            "description": "<p>String field which will be used to link to the Input TS object</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outRss.parameters.general.rssInPrg",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outRss.parameters.general.pidRemap",
            "description": "<p>Range (D) / Preserve</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outRss.parameters.general.firstPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outRss.parameters.general.lastPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outRss.parameters.general.pcrPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "outRss.parameters.pidFiltering",
            "description": "<p>List up to 5 objects</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outRss.parameters.pidFiltering.filterType",
            "description": "<p>component (D) / esType / pid</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outRss.parameters.pidFiltering.filterValue",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outRss.parameters.pidFiltering.excludeCaInfo",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "outRss.parameters.serRedList",
            "description": "<p>List up to 6 objects</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outRss.parameters.serRedList.serRedSrcTSid",
            "description": "<p>String field which will be used to link to the Input TS object</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outRss.parameters.serRedList.serRedSrcSrvMpegID",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outRss.parameters.serRedList.serRedPriority",
            "description": "<p>Alternative source priority<br/>Range: 0-6, with 0 being the same priority as the main source<br/>Relevant for Automatic Revert redundancy mode</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outRss.parameters.serRedList.serRedSubPriority",
            "description": "<p>Alternative source sub priority - defines order of entities with the same priority<br/>Range: 1-6<br/>Relevant for Automatic Revert redundancy mode</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "outRss.parameters.spsSrcList",
            "description": "<p>List up to 2 objects</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outRss.parameters.spsSrcList.spsSrcTSid",
            "description": "<p>String field which will be used to link to the Input TS object</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outRss.parameters.spsSrcList.spsSrcSrvMpegID",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outRss.parameters.advance",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outRss.parameters.advance.ccReStamp",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outRss.parameters.advance.pidPriority",
            "description": "<p>String field 'Follow Program' (D) / 'Priority 1' (old mode name 'High') / 'Priority 2' ('Normal') / 'Priority 3' ('Medium') / 'Priority 4' ('Low') / 'Priority 5' / ... / 'Priority 12'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outRss.parameters.advance.scrOverride",
            "description": "<p>None (D) / Always Scrambled / Always Clear</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outRss.parameters.advance.delay",
            "description": "<p>Numeric field (0 (D))</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - create outRss under outSrv",
          "content": "{   \n     \"parentId\": \"5300001\",\n     \"parentTag\": \"outSrv\",\n     \"tag\": \"outRss\",\n     \"action\": \"create\",\n     \"parameters\": {\n       \"general\": {\n         \"rssInTS\": \"4000008\",\n         \"rssInPrg\": 1,\n         \"pidRemap\": \"Range\",\n         \"firstPid\": 37,\n         \"lastPid\": 46,\n           \"pcrPid\":36\n       },\n       \"pidFiltering\": {\n         \"pidFilteringList\": [\n           {\n             \"filterType\": \"pid\",\n             \"filterValue\": 1\n           },\n           {\n             \"filterType\": \"esType\",\n             \"filterValue\": 2\n           },\n           {\n             \"filterType\": \"component\",\n             \"filterValue\": 3\n           }\n         ],\n         \"excludeCaInfo\": true\n       },\n       \"advance\": {\n         \"ccReStamp\": false,\n         \"pidPriority\": \"Follow Program\",\n         \"scrOverride\": \"None\",\n         \"delay\": 0\n       }\n     }\n}",
          "type": "json"
        },
        {
          "title": "Request Example - create outRss  under outTs",
          "content": "{\n   \"tag\": \"outSrv\",\n   \"parentId\": \"5000001\",\n   \"parentTag\": \"outTs\",\n   \"action\": \"create\",\n   \"parameters\": {\n       \"general\": {\n           \"mpegSrvId\": 99,\n           \"description\": \"Service Test 1\",\n           \"priority\": \"Priority 2\",\n           \"pmtPID\": 323,\n           \"programMode\":true\n            }\n   },\n   \"sons\": [\n       {\n           \"tag\": \"outRss\",\n           \"action\": \"create\",\n           \"parentTag\": \"outSrv\",\n           \"parameters\": {\n               \"general\": {\n                   \"rssInTS\": \"4000001\",\n                   \"rssInPrg\": 1,\n                   \"pidRemap\": \"Range\",\n                   \"firstPid\": 34,\n                   \"lastPid\": 43,\n                     \"pcrPid\":33\n               },\n               \"pidFiltering\": {\n                   \"pidFilteringList\": [\n                       {\n                           \"filterType\": \"pid\",\n                           \"filterValue\": 3\n                       },\n                       {\n                           \"filterType\": \"esType\",\n                           \"filterValue\": 3\n                       },\n                       {\n                           \"filterType\": \"component\",\n                           \"filterValue\": 4\n                       }\n                   ]\n               },\n               \"serRedList\": [\n                   {\n                       \"serRedSrcTSid\": \"4000002\",\n                       \"serRedSrcSrvMpegID\": 3\n                   },\n                   {\n                       \"serRedSrcTSid\": \"4000001\",\n                       \"serRedSrcSrvMpegID\": 2\n                   }\n               ],\n               \"advance\": {\n                   \"ccReStamp\": false,\n                   \"pidPriority\": \"Follow Program\",\n                   \"scrOverride\": \"None\",\n                   \"delay\": 0\n               }\n           }\n       }\n   ]\n}",
          "type": "json"
        },
        {
          "title": "Request Example - update outRss",
          "content": "{   \n     \"id\": \"5600001\",\n     \"tag\": \"outRss\",\n     \"action\": \"update\",\n     \"parameters\": {\n       \"general\": {\n         \"rssInTS\": \"4000008\",\n         \"rssInPrg\": 1,\n         \"pidRemap\": \"Range\",\n         \"firstPid\": 37,\n         \"lastPid\": 46,\n           \"pcrPid\":36\n       },\n       \"pidFiltering\": {\n         \"pidFilteringList\": [\n           {\n             \"filterType\": \"pid\",\n             \"filterValue\": 1\n           },\n           {\n             \"filterType\": \"esType\",\n             \"filterValue\": 2\n           },\n           {\n             \"filterType\": \"component\",\n             \"filterValue\": 3\n           }\n         ],\n         \"excludeCaInfo\": true\n       },\n       \"advance\": {\n         \"ccReStamp\": false,\n         \"pidPriority\": \"Follow Program\",\n         \"scrOverride\": \"None\",\n         \"delay\": 0\n       }\n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response Example - Created 201": [
          {
            "group": "Response Example - Created 201",
            "type": "String",
            "optional": false,
            "field": "Object",
            "description": "<p>ID of Created outRss object</p>"
          }
        ]
      }
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Output_RSS",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Create/Update Output Service",
    "version": "4.2.0",
    "group": "Output_Service",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.id",
            "description": "<p>Unique String field Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.tag",
            "description": "<p>outSrv</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parentId",
            "description": "<p>String field linked to the Parent node/object (OutTS) Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parentTag",
            "description": "<p>OutTS Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.general.mpegSrvId",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parameters.general.description",
            "description": "<p>Alphanumeric field (e.g. &quot;CNN&quot;, &quot;Fox&quot;, etc)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parameters.general.priority",
            "description": "<p>String field 'Priority 1' (D) (old mode name 'High') / 'Priority 2' ('Normal') / 'Priority 3' ('Medium') / 'Priority 4' ('Low') / 'Priority 5' / ... / 'Priority 12'</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.general.pmtPID",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.general.pcrPID",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSrv.parameters.general.programMode",
            "description": "<p>false (D) / true (relevant for create, in case of true outRss should be created also as a son)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.scr",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parameters.scr.caDescriptors",
            "description": "<p>Prog (D) / PID / Both</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSrv.parameters.scr.biss",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parameters.scr.cw",
            "description": "<p>Hexadecimal field (maximum 12 characters and length must be a multiple of 2 characters)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.scr.p-code",
            "description": "<p>0, 1 (D), 2 .. 31</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.redundancy",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parameters.redundancy.scheme",
            "description": "<p>None (D) / Manual / Manual Revert / Automatic / Automatic Revert</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.redundancy.numBkp",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.redundancy.activePort",
            "description": "<p>Primary (D) / Backup1 / Backup2 / Backup3 / Backup4 / Backup5 / Backup6 Applicable when Scheme: Manual</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.redundancy.inactivity",
            "description": "<p>Applicable when Scheme: Not Manual</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.redundancy.inactivity.failoverWindow",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.redundancy.inactivity.timeoutRevert",
            "description": "<p>Numeric field Applicable when Scheme: Automatic Revert</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSrv.parameters.redundancy.ccErrors",
            "description": "<p>true (D) / false Applicable when Scheme: Not Manual</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.redundancy.ccErrorProps",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.redundancy.ccErrorProps.numCCerrors",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.redundancy.ccErrorProps.ccWindow",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.redundancy.ccErrorProps.ccErrRevert",
            "description": "<p>Numeric field Applicable when Scheme: Automatic Revert</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSrv.parameters.redundancy.bitrate",
            "description": "<p>true (D) / false Applicable when Scheme: Not Manual</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.redundancy.bitrateProps",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.redundancy.bitrateProps.bitrateWindow",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.redundancy.bitrateProps.bitrateRevert",
            "description": "<p>Numeric field Applicable when Scheme: Automatic Revert</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSrv.parameters.redundancy.bitrateOverflow",
            "description": "<p>true (D) / false Applicable when Scheme: Not Manual</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.redundancy.bitrateOverflowProps",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.redundancy.bitrateOverflowProps.bitrateOverflowWindow",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.redundancy.bitrateOverflowProps.bitrateOverflowRevert",
            "description": "<p>Numeric field Applicable when Scheme: Automatic Revert</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSrv.parameters.redundancy.scr",
            "description": "<p>true (D) / false Applicable when Scheme: Not Manual</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSrv.parameters.redundancy.invalidEsType",
            "description": "<p>true (D) / false Applicable when Scheme: Not Manual</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.sps",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSrv.parameters.sps.spsEnable",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parameters.sps.spsMode",
            "description": "<p>Manual (D) / SCTE35</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parameters.sps.spsActiveSource",
            "description": "<p>Primary / Alternative1 Read Only field</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.sps.manualSettings",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.sps.manualSettings.spsNumAlt",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parameters.sps.manualSettings.spsSource",
            "description": "<p>Primary (D) / Alternative1 Applicable when mode: Manual</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.sps.spsScte35Settings",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.sps.spsScte35Settings.spsCommand",
            "description": "<p>Splice Insert (D)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.sps.spsScte35Settings.spsFromEventSource",
            "description": "<p>Numeric field (0..15)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.sps.spsScte35Settings.spsToEventSource",
            "description": "<p>Numeric field (0..15)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parameters.sps.spsScte35Settings.spsRemuxby",
            "description": "<p>PID (D) / ES / CompID</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.sps.spsScte35Settings.spsPidSettings",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.sps.spsScte35Settings.spsPidSettings.spsInputPid",
            "description": "<p>PID field</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.sps.spsScte35Settings.spsEsSettings",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.sps.spsScte35Settings.spsEsSettings.inputSrv",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.sps.spsScte35Settings.spsCompIDSettings",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.sps.spsScte35Settings.spsCompIDSettings.componentID",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.sps.spsScte35Settings.spsCompIDSettings.inputSrv",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSrv.parameters.sps.spsBlackFrameRed",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.sps.spsTargetVbvDelay",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.sps.spsMaxVbvDelay",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.pcr",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSrv.parameters.pcr.generatePCR",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parameters.pcr.sourceClock",
            "description": "<p>Internal (D) / Preserve Input</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.pcr.repRate",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parameters.pcr.pcrObjId",
            "description": "<p>Entity ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.slate",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSrv.parameters.slate.enable",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parameters.slate.slateSrcTSid",
            "description": "<p>String field which will be used to link to the Input TS object</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.slate.slateSrcSrvMpegID",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parameters.slate.mode",
            "description": "<p>Automatic Revert (D) / Manual</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSrv.parameters.slate.active",
            "description": "<p>Slate false (D) / true Applicable when Mode: Manual</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.eas",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSrv.parameters.eas.enable",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.eas.easProprietary",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..32",
            "optional": false,
            "field": "outSrv.parameters.eas.easProprietary.easInputChannel",
            "description": "<p>Name of Emergency Channel to be used as Input</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.eas.easScte18",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Active\"",
              "\"Not Active\""
            ],
            "optional": false,
            "field": "outSrv.parameters.eas.easScte18.easStatus",
            "description": "<p>Read only</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..32",
            "optional": false,
            "field": "outSrv.parameters.eas.easScte18.easInputChannel",
            "description": "<p>Name of Emergency Channel to be used as Input</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "outSrv.parameters.eas.easScte18.easList",
            "description": "<p>List of up to 10 objects</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parameters.eas.easScte18.easList.easState",
            "description": "<p>&quot;All&quot; or State Abbrev. e.g. AK, AL...</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "outSrv.parameters.eas.easScte18.easList.easCounty",
            "description": "<p>County code in the range [0, 999]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Northwest\"",
              "\"North Central\"",
              "\"Northeast\"",
              "\"West Central\"",
              "\"Central\"",
              "\"East Central\"",
              "\"Southwest\"",
              "\"South Central\"",
              "\"Southeast\""
            ],
            "optional": false,
            "field": "outSrv.parameters.eas.easScte18.easList.easSubdivision",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.dpi",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSrv.parameters.dpi.enable",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parameters.dpi.dpiScte30Name",
            "description": "<p>String field which will be used to link to the Input SCTE30 Channel object</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parameters.dpi.remuxMode",
            "description": "<p>pid (D) / component / esType / none</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.dpi.pid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.dpi.pid.dpiInPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.dpi.component",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.dpi.component.dpiInPrg",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.dpi.component.dpiComponentId",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.dpi.esType",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.dpi.esType.dpiInPrg",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSrv.parameters.dpi.blackFrameRed",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.dpi.targetVbvDelay",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.dpi.maxVbvDelay",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.esam",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parameters.esam.esamMode",
            "description": "<p>None (D) / LSS / LSP</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.esam.lsp",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSrv.parameters.esam.lsp.timestampDescr",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.esam.lss",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parameters.esam.lss.zoneId",
            "description": "<p>Alphanumeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSrv.parameters.esam.lss.outputDpiPid",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parameters.esam.esamServer",
            "description": "<p>String field which will be used to link to the predefined ESAM Servers</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parameters.esam.acquisitionPointId",
            "description": "<p>Alphanumeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parameters.esam.remuxMode",
            "description": "<p>pid (D) / component / esType (component and esType not supported)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.esam.pid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.esam.pid.esamdpiInPid",
            "description": "<p>PID Numeric field (Decimal values) (8191 (D))</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSrv.parameters.esam.pid.stampSpliceTime",
            "description": "<p>false / true (D)*</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parameters.esam.msgCtrlSpliceInsert",
            "description": "<p>POIS (Fallback Pass) (D) / POIS (Fallback Discard) / Always Pass / Always Discard</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parameters.esam.msgCtlTimeSignal",
            "description": "<p>POIS (Fallback Pass) (D) / POIS (Fallback Discard) / Always Pass / Always Discard</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.other",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parameters.other.refPrginPAT",
            "description": "<p>Always (D) / IfInput</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSrv.parameters.other.maskSrvFailure",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSrv.parameters.other.statMuxAligment",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSrv.parameters.other.condSrvFailure",
            "description": "<p>All PIDs (D) / Any PID</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSrv.parameters.other.maxSrvBitrate",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSrv.parameters.other.maxSrvBitrate.enable",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSrv.parameters.other.maxSrvBitrate.maxBitrate",
            "description": "<p>Numeric field</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - create outSrv",
          "content": "{   \n   \"tag\": \"outSrv\",\n   \"action\": \"create\",\n   \"parentId\": \"5000001\",\n   \"parentTag\": \"outTs\",\n   \"parameters\": {\n       \"general\": {\n           \"mpegSrvId\": 99,\n           \"description\": \"CNN\",\n           \"priority\": \"Priority 2\",\n           \"pmtPID\": 323,\n           \"programMode\": false\n       },\n       \"scr\": {\n           \"caDescriptors\": \"PID\",\n           \"biss\": true,\n           \"cw\": \"ff55ee\",\n           \"p-code\": 22\n       },\n       \"redundancy\": {\n           \"scheme\": \"Automatic\",\n           \"numBkp\": 1,\n           \"activePort\": \"Primary\",\n           \"inactivity\": {\n               \"failoverWindow\": 77,\n               \"timeoutRevert\": 3\n           },\n           \"ccErrors\": true,\n           \"ccErrorProps\": {\n               \"numCCerrors\": 66,\n               \"ccWindow\": 600,\n               \"ccErrRevert\": 6\n           },\n           \"bitrate\": true,\n           \"bitrateProps\": {\n               \"bitrateWindow\": 55,\n               \"bitrateRevert\": 5\n           },\n           \"scr\": false,\n           \"invalidEsType\": true\n       },\n       \"sps\": {\n           \"spsEnable\": true,\n           \"spsMode\": \"SCTE35\",\n           \"spsActiveSource\": \"Alternative1\",\n           \"spsScte35Settings\": {\n               \"spsCommand\": \"Splice Insert\",\n               \"spsFromEventSource\": 4,\n               \"spsToEventSource\": 9,\n               \"spsRemuxby\": \"CompID\",\n               \"spsCompIDSettings\": {\n                   \"componentID\": 5,\n                   \"inputSrv\": 66\n               }\n           },\n           \"spsTargetVbvDelay\": 850,\n           \"spsMaxVbvDelay\": 950\n       },\n       \"other\": {\n          \"maxSrvBitrate\":{\n              \"enable\": true,\n              \"maxBitrate\": 1\n          }\n      }\n   }\n}",
          "type": "json"
        },
        {
          "title": "Request Example - update outSrv",
          "content": "{   \n   \"tag\": \"outSrv\",\n   \"id\": \"5300001\",\n   \"action\": \"update\",\n   \"parameters\": {\n       \"general\": {\n           \"mpegSrvId\": 99,\n           \"description\": \"CNN\",\n           \"priority\": \"Priority 2\",\n           \"pmtPID\": 323\n       },\n       \"scr\": {\n           \"caDescriptors\": \"PID\",\n           \"biss\": true,\n           \"cw\": \"ff55ee\",\n           \"p-code\": 22\n       },\n       \"sps\": {\n           \"spsEnable\": true,\n           \"spsMode\": \"SCTE35\",\n           \"spsActiveSource\": \"Alternative1\",\n           \"spsScte35Settings\": {\n               \"spsCommand\": \"Splice Insert\",\n               \"spsFromEventSource\": 4,\n               \"spsToEventSource\": 9,\n               \"spsRemuxby\": \"CompID\",\n               \"spsCompIDSettings\": {\n                   \"componentID\": 5,\n                   \"inputSrv\": 66\n               }\n           },\n           \"spsTargetVbvDelay\": 850,\n           \"spsMaxVbvDelay\": 950\n       },\n       \"pcr\": {\n           \"generatePCR\": true,\n           \"sourceClock\": \"Internal\",\n           \"repRate\": 28,\n           \"pcrObjId\": \"5100001\"\n       }\n    }\n}",
          "type": "json"
        },
        {
          "title": "Request Example - update outSrv for splicing (dpi)",
          "content": "{ \n   \"tag\": \"outSrv\",\n   \"id\": \"5300001\",\n   \"action\": \"update\",\n   \"parameters\": {\n       \"general\": {\n           \"mpegSrvId\": 98,\n           \"description\": \"CNN_ad\",\n           \"priority\": \"Priority 2\",\n           \"pmtPID\": 32,\n           \"programMode\":false\n       },\n       \"dpi\": {\n           \"enable\":true,\n           \"dpiScte30NameMode\":\"Program Name\",\n           \"dpiScte30Name\":\"\",\n           \"remuxMode\":\"pid\",\n           \"pid\": {\n               \"dpiInPid\":256\n           },\n           \"blackFrameRed\":false\n       }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response Example - Created 201": [
          {
            "group": "Response Example - Created 201",
            "type": "String",
            "optional": false,
            "field": "Object",
            "description": "<p>ID of created Service Out object</p>"
          }
        ]
      }
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Output_Service",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Create/Update Output Socket",
    "version": "4.2.0",
    "group": "Output_Socket",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSocket.id",
            "description": "<p>Unique String field - Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSocket.tag",
            "description": "<p>outSocket</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSocket.parentId",
            "description": "<p>String field linked to the Parent node/object, ipPort Applicable for regular Socket (without vlan Tagging),vlan Applicable for Tagged Socket (with vlan Tagging) – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSocket.parentTag",
            "description": "<p>ipPort/asiPort – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSocket.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSocket.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSocket.parameters.general.enable",
            "description": "<p>true (D) / false</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSocket.parameters.general.description",
            "description": "<p>Alphanumeric field (e.g. &quot;Socket X&quot;, etc)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSocket.parameters.general.ipType",
            "description": "<p>Multicast (D) / Unicast / SRT</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSocket.parameters.general.ipVer",
            "description": "<p>IPv4  (D) / IPv6</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSocket.parameters.general.ipAddress",
            "description": "<p>IP address format (only IPv4)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSocket.parameters.general.udpPort",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSocket.parameters.general.alias",
            "description": "<p>Number field linked to the alias port index.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSocket.parameters.general.l2tpSessionID",
            "description": "<p>Numeric field - Applicable when &quot;encapMode&quot; is L2TPv2, SCTE 55-1 OOB, SCTE 55-1 BCM</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSocket.parameters.general.encapMode",
            "description": "<p>UDP (D), RTP, HRTP, L2TPv2, SCTE 55-1 OOB, SCTE 55-1 BCM</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSocket.parameters.general.ssrcId",
            "description": "<p>Numeric field relevant for RTP encupsulation mode</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSocket.parameters.general.vlanID",
            "description": "<p>String field linked to the VLAN object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSocket.parameters.general.fecEnable",
            "description": "<p>true / false (D) - Not applicable when &quot;encapMode&quot; is UDP</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSocket.parameters.general.numCol",
            "description": "<p>Numeric field (Decimal values) - (D:5, range: 4 - 20) - Not applicable when &quot;encapMode&quot; is UDP</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSocket.parameters.general.numRow",
            "description": "<p>Numeric field (Decimal values) - (D:5, range: 4 - 20) - Not applicable when &quot;encapMode&quot; is UDP</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSocket.parameters.general.2D",
            "description": "<p>true / false (D) - Not applicable when &quot;encapMode&quot; is &quot;UDP&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSocket.parameters.general.bitrateMode",
            "description": "<p>CBR (D) / VBR Burst / VBR Clipping</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSocket.parameters.general.bitrate",
            "description": "<p>(Mbps) Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSocket.parameters.general.ipSRT",
            "description": "<p>Relevant for ipType: SRT</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "Caller",
              "Listener"
            ],
            "optional": false,
            "field": "outSocket.parameters.general.ipSRT.connectMode",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "0,65535",
            "optional": false,
            "field": "outSocket.parameters.general.ipSRT.localPort",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSocket.parameters.general.ipSRT.passphrase",
            "description": "<p>relevant for ipSRT.callerSettings.encryptType: AES 128, AES 192, AES 256</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "20,8000",
            "optional": false,
            "field": "outSocket.parameters.general.ipSRT.latency",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "5,50",
            "optional": false,
            "field": "outSocket.parameters.general.ipSRT.bandwidthOverhead",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSocket.parameters.general.ipSRT.callerSettings",
            "description": "<p>relevant for connectMode Caller</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "IP",
              "URL"
            ],
            "optional": false,
            "field": "outSocket.parameters.general.ipSRT.callerSettings.remoteConnection",
            "description": "<p>IP(D) / URL.<br/>Relevant for connectMode: Caller</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSocket.parameters.general.ipSRT.callerSettings.remoteUrl",
            "description": "<p>Relevant for remoteConnection: URL</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "0,65535",
            "optional": false,
            "field": "outSocket.parameters.general.ipSRT.callerSettings.remotePort",
            "description": "<p>Port to connect to.<br/>Relevant for connectMode: Caller and remoteConnection: URL</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "0,100",
            "optional": false,
            "field": "outSocket.parameters.general.ipSRT.callerSettings.discoveryTimeout",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Disable\"",
              "\"AES 128\"",
              "\"AES 192\"",
              "\"AES 256\""
            ],
            "optional": false,
            "field": "outSocket.parameters.general.ipSRT.callerSettings.encryptType",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSocket.parameters.general.ipSRT.callerSettings.streamId",
            "description": "<p>SRT Stream ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSocket.parameters.general.ipSRT.srtPathRedundancy",
            "description": "<p>Set main/mirror transport to transmit as SRT connection bonding group</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSocket.parameters.advance.ipPktSize",
            "description": "<p>1316 (D) / 1128 / 940 / 752 / 564 / 376 / 188</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSocket.parameters.advance.ttl",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSocket.parameters.advance.operationalMode",
            "description": "<p>Broadcast (D) / VoD</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "outSocket.parameters.advance.vodSettings",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSocket.parameters.advance.vodSettings.qamID",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSocket.parameters.advance.vodSettings.interface",
            "description": "<p>Numeric field which will be used to link to the Interface object</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSocket.parameters.advance.vodSettings.aliasVodIn",
            "description": "<p>Numeric field, alias port index which will be used for input sockets; -1 is none</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSocket.parameters.sourceIP.override",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSocket.parameters.sourceIP.overrideSettings",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSocket.parameters.sourceIP.overrideSettings.ipAddress",
            "description": "<p>IP address matching the socket IP version</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSocket.parameters.sourceIP.overrideSettings.port",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outSocket.parameters.qos.dscp",
            "description": "<p>Numeric field - (D: 0)<br/><b>Note:</b> For RestAPI QosType will be set to &quot;Free Entry&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "outSocket.parameters.mirrorTs.mirrorsIdsList",
            "description": "<p>Read-only List of destinations (“Physical object Ids”) of the Mirrors TS(s)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSocket.parameters.mirrorTs.mirrorForceClear",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outSocket.parameters.mirrorTs.mirrorIdentical",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outSocket.parameters.mirrorTs.mirrorOfId",
            "description": "<p>String field which will be used to link to the Master Socket object</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSocket.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSocket.parameters.advance",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSocket.parameters.sourceIP",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSocket.parameters.qos",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outSocket.parameters.mirrorTs",
            "description": "<p>Applicable for Mirror TS</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - create socket",
          "content": "Important: Always build the configuration logically, for instance configure the Network before the Transport,\notherwise an error will occur.\n\noutSocket must be created with outTs son:\n{\n   \"tag\": \"outSocket\",\n   \"parentId\": \"34006\",\n   \"parentTag\": \"ipPort\",\n   \"action\": \"create\",\n   \"parameters\": {\n     \"general\": {\n       \"enable\": true,\n       \"description\": \"Socket X\",\n       \"ipType\": \"Unicast\",\n       \"ipVer\": \"IPv4\",\n       \"ipAddr\": \"10.20.1.177\",\n       \"udpPort\": 3001,\n       \"fecEnable\": true,\n       \"numCol\": 6,\n       \"numRow\": 7,\n       \"2D\": false,\n       \"ssrcId\": 5030,\n       \"bitrateMode\": \"VBR Burst\",\n       \"bitrate\":20\n       },\n       \"advance\": {\n        \"ipPktSize\": 1128,\n        \"ttl\": 255,\n        \"operationalMode\": \"VoD\",\n        \"vodSettings\": {\n           \"qamID\": 1022,\n           \"interface\": 4002\n       }\n       },\n       \"sourceIP\": {\n          \"override\": true,\n          \"overrideSettings\": {\n              \"ipAddress\": \"1.1.1.1\",\n              \"port\": 2001\n         }\n       },\n       \"qos\": {\n           \"dscp\": 1\n       }\n   },\n     \"sons\": [\n       {\n        \"tag\": \"outTs\",\n        \"action\": \"create\",\n         \"parameters\": {\n          \"general\": {\n             \"description\": \"Output TS template\",\n              \"mpegTSid\": 4,\n               \"tables\": \"PSI\",\n                \"networkid\": 1,\n                 \"origNetworkid\": 3\n               }\n           }\n          }\n       ]\n}",
          "type": "json"
        },
        {
          "title": "Request Example - update outSocket",
          "content": "{\n   \"tag\": \"outSocket\",\n   \"action\": \"update\",\n   \"id\": \"450001\",\n   \"parameters\": {\n       \"general\": {\n           \"description\": \"updated description socket\"\n       }\n   },\n   \"sons\": [\n       {\n           \"tag\": \"outTs\",\n           \"action\": \"update\",\n           \"id\": \"5000001\",\n           \"parameters\": {\n               \"general\": {\n                   \"description\": \"updated description ts\"\n               },\n               \"tables\": {\n                   \"pat\": {\n                       \"patMode\": \"Generate\",\n                       \"patGen\": {\n                           \"patRepRate\": 52,\n                           \"patTsId\": 1,\n                           \"patVersion\": 5,\n                           \"patOverride\": true\n                       }\n                   },\n                   \"cat\": {\n                       \"catMode\": \"Generate\",\n                       \"catGen\": {\n                           \"catOverride\": false,\n                           \"catRepRate\": 66,\n                           \"catVersion\": 30,\n                           \"catDescriptorsList\": [\n                               {\n                                   \"catPid\": 111,\n                                   \"catCasId\": \"0022\",\n                                   \"catPrivData\": \"555555\"\n                               },\n                               {\n                                   \"catPid\": 333,\n                                   \"catCasId\": \"0444\",\n                                   \"catPrivData\": \"56565656565656\"\n                               }\n                           ]\n                       }\n                   },\n                   \"tdt\": {\n                       \"tdtMode\": \"Generate\",\n                         \"tdtGen\": {\n                             \"tdtRepRate\": 4000\n                         }\n                   },\n                   \"sdt\": {\n                       \"sdtMode\": \"Generate\",\n                       \"sdtGen\": {\n                           \"sdtRepRate\": 50,\n                           \"sdtVersion\": 42,\n                           \"sdtOverride\": true,\n                           \"sdtServiceList\": []\n                       }\n                   },\n                   \"tot\": {\n                       \"totMode\": \"Generate\",\n                       \"totGen\": {\n                             \"totRepRate\": 4000,\n                           \"totDescriptorsList\": [\n                               {\n                                   \"totDateChange\": \"4/21/2022\",\n                                   \"totTimeChange\": \"11:32:21\",\n                                   \"totCountryCode\": \"AFG\",\n                                   \"totCountryRegion\": 8,\n                                   \"totLocalOffset\": \"06:00\",\n                                   \"totNextOffset\": \"04:00\"\n                               },\n                               {\n                                   \"totCountryCode\": \"AFG\",\n                                   \"totCountryRegion\": 9,\n                                   \"totDateChange\": \"4/21/2023\",\n                                   \"totLocalOffset\": \"-06:00\",\n                                   \"totNextOffset\": \"-04:00\",\n                                   \"totTimeChange\": \"11:32:21\"\n                               }\n                           ]\n                       }\n                   }\n               }\n           }\n       }\n   ]\n}",
          "type": "json"
        },
        {
          "title": "Request Example - create SRT outSocket",
          "content": "{\n   \"tag\": \"outSocket\",\n   \"action\": \"create\",\n   \"parentId\": \"34004\",\n   \"parentTag\": \"ipPort\",\n   \"parameters\": {\n       \"general\": {\n           \"enable\": true,\n           \"description\": \"SRT master caller socket\",\n           \"ipAddr\": \"1.2.3.4\",\n           \"ipType\": \"SRT\",\n           \"ipVer\": \"IPv4\",\n           \"udpPort\": 3000,\n           \"ipSRT\": {\n               \"connectMode\": \"Caller\",\n               \"callerSettings\": {\n                   \"remoteConnection\": \"IP\",\n                   \"discoveryTimeout\": 100,\n                   \"encryptType\": \"AES 128\"\n               },\n               \"passphrase\": \"32dsldfkjdslkjflkdsjfklj32\",\n               \"localPort\": 0,\n                 \"bandwidthOverhead\": 20,\n               \"latency\": 100\n           }\n       }\n   },\n   \"sons\": [\n       {\n           \"tag\": \"outTs\",\n           \"action\": \"create\",\n           \"parameters\": {\n               \"general\": {\n                   \"description\": \"Output TS template\",\n                   \"mpegTSid\": 4,\n                   \"tables\": \"PSI\",\n                   \"networkid\": 1,\n                   \"origNetworkid\": 3\n               },\n               \"dataTrack\": {\n                   \"enable\": true\n               },\n               \"psigGen\": {\n                   \"enable\": false,\n                   \"primaryClient\": \"None\",\n                   \"backupClient\": \"None\",\n                   \"port\": 1327\n               },\n               \"scrKey\": {\n                   \"enable\": false,\n                   \"fixedKey\": \"11110000111100001111000011110000\"\n               }\n           }\n       }\n   ]\n}",
          "type": "json"
        },
        {
          "title": "Request Example - update SRT outSocket Caller IP",
          "content": "{\n   \"tag\": \"outSocket\",\n   \"id\": \"450001\",\n   \"action\": \"update\",\n    \"parameters\": {\n       \"general\": {\n         \"description\": \"srt in socket\",\n         \"udpPort\": 6002,\n         \"ipType\": \"SRT\",\n         \"ipSRT\": {\n             \"connectMode\": \"Caller\",\n             \"callerSettings\": {\n             \"remoteConnection\": \"IP\",\n             \"discoveryTimeout\": 100,\n             \"encryptType\": \"AES 128\"\n             },\n             \"passphrase\": \"32dsldfkjdslkjflkdsjfklj32\",\n             \"localPort\": 6000,\n               \"bandwidthOverhead\": 18,\n             \"latency\": 8000\n         }\n       }\n    }\n}",
          "type": "json"
        },
        {
          "title": "Request Example - update SRT outSocket Caller URL",
          "content": "{\n   \"tag\": \"outSocket\",\n   \"id\": \"450001\",\n   \"action\": \"update\",\n    \"parameters\": {\n       \"general\": {\n         \"description\": \"srt in socket\",\n         \"ipType\": \"SRT\",\n         \"ipSRT\": {\n             \"connectMode\": \"Caller\",\n             \"callerSettings\": {\n             \"remoteConnection\": \"URL\",\n             \"remoteUrl\": \"abc.com\",\n             \"remotePort\": 6010,\n             \"discoveryTimeout\": 100,\n             \"encryptType\": \"AES 128\"\n             },\n             \"passphrase\": \"32dsldfkjdslkjflkdsjfklj32\",\n             \"localPort\": 6000,\n             \"latency\": 8000\n         }\n       }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response Example - Created 201": [
          {
            "group": "Response Example - Created 201",
            "type": "String",
            "optional": false,
            "field": "Object",
            "description": "<p>ID of Created output Socket object</p>"
          }
        ]
      }
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Output_Socket",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "PSIG",
    "version": "4.2.0",
    "name": "PSIG",
    "group": "PSIG",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "psig.id",
            "description": "<p>Unique String field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"psig\""
            ],
            "optional": false,
            "field": "psig.tag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"psigMux\""
            ],
            "optional": false,
            "field": "psig.parentTag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"8001\""
            ],
            "optional": false,
            "field": "psig.parentId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"create\"",
              "\"get\"",
              "\"update\"",
              "\"delete\""
            ],
            "optional": false,
            "field": "psig.action",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "psig.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "psig.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "0,65535",
            "optional": false,
            "field": "psig.parameters.general.tcpPort",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "0,5",
            "optional": false,
            "field": "psig.parameters.general.retriesInterval",
            "description": "<p>Measured in Milliseconds</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "psig.parameters.general.ipAddress",
            "description": "<p>IPv4</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "psig.parameters.general.ipMask",
            "description": "<p>IPv4 mask</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Create Firewall Rule",
          "content": "{\n    \"tag\": \"psig\",\n    \"action\": \"create\",\n    \"parentId\": \"8001\",\n    \"parentTag\": \"psigMux\",\n    \"parameters\": {\n        \"general\": {\n            \"tcpPort\": 30001,\n            \"retriesInterval\": 1,\n            \"ipAddress\": \"1.2.3.4\",\n            \"ipMask\": \"255.255.254.0\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "PSIG",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Update/Get Platform",
    "version": "4.2.0",
    "group": "Platform",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.id",
            "description": "<p>Unique String field – Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.tag",
            "description": "<p>platform</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.action",
            "description": "<p>update/get</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "platform.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.deviceModel",
            "description": "<p>Alphanumeric field (get only)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.systemName",
            "description": "<p>Alphanumeric field (e.g. &quot;ProStream”, etc)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.systemLocation",
            "description": "<p>Alphanumeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.systemContact",
            "description": "<p>Alphanumeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.partNumber",
            "description": "<p>Alphanumeric field (get only)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.serialNumber",
            "description": "<p>Alphanumeric field (get only)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.powerSypply",
            "description": "<p>Dual (D) / Single (get only)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "platform.parameters.sshEnable",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "platform.parameters.httpEnable",
            "description": "<p>false (D) / true Deselecting this feature will disable HTTP accessibility to the device</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "platform.parameters.igmpVer",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "platform.parameters.dateAndTime",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "platform.parameters.dateAndTime.general",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.dateAndTime.general.utcPpsAlignmentOffset",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "platform.parameters.dateAndTime.general.ppsEnable",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.dateAndTime.general.date",
            "description": "<p>Alphanumeric field (e.g. &quot;03/20/2022&quot;, etc)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.dateAndTime.general.time",
            "description": "<p>Alphanumeric field (e.g. &quot;06:56:48&quot;, etc)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.dateAndTime.general.timeZone",
            "description": "<p>Alphanumeric field (minutes offset e.g. &quot;-720&quot;, etc)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "platform.parameters.dateAndTime.ntp",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "platform.parameters.dateAndTime.ntp.ntpEnable",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "platform.parameters.dateAndTime.ntp.ntpServers",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.dateAndTime.ntp.ntpServers.ntpIpAddress",
            "description": "<p>Alphanumeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "platform.parameters.dateAndTime.ntp.ntpServers.ntpPort",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.dateAndTime.ntp.ntpServers.ntpIpVersion",
            "description": "<p>Alphanumeric field ( &quot;IPv4&quot; / &quot;IPv6&quot; )</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "platform.parameters.dateAndTime.ptp",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "platform.parameters.dateAndTime.ptp.ptpEnable",
            "description": "<p>false (D) / true (reset command required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "platform.parameters.dateAndTime.ptp.ptpEnableDebugPrints",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "platform.parameters.dateAndTime.ptp.ptpBmcaEnable",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "platform.parameters.dateAndTime.ptp.ptpUseLegacyHW",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.dateAndTime.ptp.ptpIpType",
            "description": "<p>Alphanumeric field ( &quot;Multicast&quot; / &quot;Unicast&quot; )</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.dateAndTime.ptp.ptpIpVer",
            "description": "<p>Alphanumeric field ( &quot;IPv4&quot; / &quot;IPv6&quot; )</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "platform.parameters.dateAndTime.ptp.ptpDomainNumber",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.dateAndTime.ptp.ptpInputInterface",
            "description": "<p>(GbE Port Object ID)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.dateAndTime.ptp.ptpIp",
            "description": "<p>Alphanumeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.dateAndTime.ptp.ptpBmcaIpAddress",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "platform.parameters.dateAndTime.ptp.ptpBmcaTimeout",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "platform.parameters.syslog",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "platform.parameters.syslog.syslogServers",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.syslog.syslogServers.syslogIp",
            "description": "<p>Alphanumeric field (IP address format of IPv4)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "platform.parameters.syslog.syslogServers.syslogPort",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.syslog.syslogServers.syslogDescription",
            "description": "<p>Alphanumeric field (0-31 characters)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "platform.parameters.snmp",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "platform.parameters.snmp.enableSnmp",
            "description": "<p>false (D) / true (After disabling the SNMP port, a restart is needed)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "platform.parameters.snmp.trapListeners",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.snmp.trapListeners.ipAddr",
            "description": "<p>Alphanumeric field (IP address format of IPv4)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.snmp.trapListeners.communityName",
            "description": "<p>Alphanumeric field (1-31 characters)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.snmp.trapListeners.from",
            "description": "<p>Alphanumeric field (&quot;0 - Emergency&quot;,&quot;1 - Alert&quot;,&quot;2 - Critical&quot;,&quot;3 - Error&quot;,&quot;4 - Warning&quot;,&quot;5 - Notice&quot;,&quot;6 - Info&quot;,&quot;7 - Debug&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.snmp.trapListeners.to",
            "description": "<p>Alphanumeric field (&quot;0 - Emergency&quot;,&quot;1 - Alert&quot;,&quot;2 - Critical&quot;,&quot;3 - Error&quot;,&quot;4 - Warning&quot;,&quot;5 - Notice&quot;,&quot;6 - Info&quot;,&quot;7 - Debug&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.snmp.trapListeners.description",
            "description": "<p>Alphanumeric field (1-31 characters)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "platform.parameters.snmp.snmpConfiguration",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.snmp.snmpConfiguration.communityNameforGet",
            "description": "<p>Alphanumeric field (0-31 characters)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.snmp.snmpConfiguration.communityNameforSet",
            "description": "<p>Alphanumeric field (0-31 characters)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "platform.parameters.dpi",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "1000-65535",
            "optional": false,
            "field": "platform.parameters.dpi.dpiPort",
            "description": "<p>Port number, 5168(D), 0 to disable dpi</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"DVS\"",
              "\"SCTE 30\""
            ],
            "optional": false,
            "field": "platform.parameters.dpi.dpiComplianceMode",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "platform.parameters.dpi.dpiFailIsDrt",
            "description": "<p>Ad Server Communication Failure is DRT</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "size": "1-3600",
            "optional": false,
            "field": "platform.parameters.dpi.dpiFailThreshold",
            "description": "<p>Ad Server Communication Failure assertion threshold</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "platform.parameters.dns",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "platform.parameters.dns.dnsServers",
            "description": "<p>Array of Alphanumeric field (IP address format of IPv4)</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "platform.parameters.dns.dnsIfcs",
            "description": "<p>Array of DNS interfaces with corresponding indices that match the dnsServers.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "platform.parameters.dns.dnsPort",
            "description": "<p>Integer field [1, 65535]</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "platform.parameters.dns.dnsRetries",
            "description": "<p>Max connection retries.<br/>Integer field [1, 10]</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "platform.parameters.dns.dnsTimeout",
            "description": "<p>Connection timeout in seconds.<br/>Integer field [1, 60]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.dns.dnsDomainName",
            "description": "<p>String field without whitespaces</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.biosVersion",
            "description": "<p>indicates the version of the Bios installed on the ProStream X device. String field (get only)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.temperature",
            "description": "<p>indicates the current temperature of the ProStream X device in the format °C / °F. String field (get only)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "platform.parameters.diskUsage",
            "description": "<p>the percentage of disk space used on the ProStream X device. Numeric field (get only)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "platform.parameters.cpuUsage",
            "description": "<p>indicates the percentage of CPU usage on the ProStream X device. Numeric field (get only)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "platform.parameters.memoryUsage",
            "description": "<p>indicates the percentage of memory used on the ProStream X device. Numeric field (get only)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.appStartTime",
            "description": "<p>indicates the start time of the ProStream X application in the format of H:M:S. H:M:S format (get only)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform.parameters.osStartTime",
            "description": "<p>indicates the start time of the ProStream X operating system in the format of H:M:S. H:M:S format (get only)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - update platform",
          "content": "{\n    \"id\": \"1\",\n    \"tag\": \"platform\",\n    \"action\": \"update\",\n    \"parameters\": {\n        \"systemName\": \"ProStream\",\n        \"systemLocation\": \"2590 Orchard Parkway San Jose, CA 95131 U.S.A\",\n        \"systemContact\": \"Harmonic, Inc +14085422559\",\n        \"lowJitterOutput\": true,\n        \"sshEnable\": true,\n        \"httpEnable\": true,\n        \"gratuitousARPEnable\": true,\n        \"igmpVer\": \"3\",\n        \"dateAndTime\": {\n            \"general\": {\n                \"utcPpsAlignmentOffset\": 40,\n                \"ppsEnable\": false\n            },\n            \"ntp\": {\n                \"ntpEnable\": true,\n                \"ntpServers\": [\n                    {\n                        \"ntpIpAddress\": \"4.4.4.5\",\n                        \"ntpPort\": 555,\n                        \"ntpIpVersion\": \"IPv4\"\n                    },\n                    {\n                        \"ntpIpAddress\": \"4.4.4.6\",\n                        \"ntpPort\": 556,\n                        \"ntpIpVersion\": \"IPv4\"\n                    }\n                ]\n            },\n            \"ptp\": {\n                \"ptpEnable\": false\n            }\n        },\n        \"syslog\": {\n            \"syslogServers\": [\n                {\n                    \"syslogIp\": \"1.2.3.5\",\n                    \"syslogPort\": 516,\n                    \"syslogDescription\": \"12345\"\n                },\n                {\n                    \"syslogIp\": \"2.3.4.6\",\n                    \"syslogPort\": 517,\n                    \"syslogDescription\": \"1111\"\n                }\n            ]\n        },\n        \"snmp\": {\n        \"enableSnmp\": true,    \n        \"trapListeners\": [\n            {\n            \"ipAddr\": \"1.2.3.4\",\n            \"communityName\": \"Tf5Ctyr4TcoW4S7gyNF2va\",\n            \"from\": \"7 - Debug\",\n            \"to\": \"0 - Emergency\",\n            \"description\": \"Listener 1\"\n            },\n            {\n            \"ipAddr\": \"2.3.4.5\",\n            \"communityName\": \"Tf5Ctyr4TcoW4S7gyNF2va\",\n            \"from\": \"7 - Debug\",\n            \"to\": \"0 - Emergency\",\n            \"description\": \"Listener 1\"\n            }\n        ],\n        \"snmpConfiguration\": {\n            \"communityNameforGet\": \"22\",\n            \"communityNameforSet\": \"33\"\n        }\n    },\n      \"dns\": {\n          \"dnsServers\": [\n              \"1.2.3.4\",\n              \"5.6.7.8\"\n          ],\n          \"dnsIfcs\": [\n              \"34001\",\n              \"34002\"\n          ],\n          \"dnsPort\": 1234,\n          \"dnsRetries\": 1,\n          \"dnsTimeout\": 10,\n          \"dnsDomainName\": \"domainName\"\n      },\n      \"dpi\": {\n          \"dpiPort\": 5000,\n          \"dpiComplianceMode\": \"DVS\",\n          \"dpiFailIsDrt\": false,\n          \"dpiFailThreshold\": 1000\n      }\n }\n}",
          "type": "json"
        },
        {
          "title": "Request Example - get platform",
          "content": " {get} /restapi/v4/conf?tag=platform&id=1\n{\n\"id\": \"1\",\n\"tag\": \"platform\",\n\"action\": \"get\",\n\"parentTag\": \"AFRICA\",\n\"parentId\": \"-1\",\n\"parameters\": {\n  \"deviceModel\": \"ProStream X HP DL360\",\n  \"systemName\": \"Prostream\",\n  \"swVersion\": \"4.2.0.0-eng.3998\",\n  \"biosVersion\": \"U32\",\n  \"temperature\": \"26 °C / 78.8 °F\",\n  \"diskUsage\": \"16%\",\n  \"systemLocation\": \"2590 Orchard Parkway San\",\n  \"systemContact\": \"Harmonic, Inc +14085422559\",\n  \"osStartTime\": \"3/14/2022, 2:56:34 PM\",\n  \"appStartTime\": \"3/14/2022, 2:57:56 PM\",\n  \"partNumber\": \"\",\n  \"serialNumber\": \"SGH138Y2GJ\",\n  \"powerSupply\": \"Dual\",\n  \"lowJitterOutput\": false,\n  \"sshEnable\": true,\n  \"httpEnable\": true,\n  \"gratuitousARPEnable\": true,\n  \"igmpVer\": \"3\",\n  \"dateAndTime\": {\n    \"general\": {\n      \"time\": \"08:24:40\",\n      \"date\": \"03/20/2022\",\n      \"timeZone\": \"0\",\n      \"utcPpsAlignmentOffset\": 40,\n      \"ppsEnable\": false\n    },\n    \"ntp\": {\n      \"ntpEnable\": true,\n      \"ntpServers\": [\n        {\n          \"ntpIpAddress\": \"4.4.4.5\",\n          \"ntpPort\": 555,\n          \"ntpIpVersion\": \"IPv4\"\n        },\n        {\n          \"ntpIpAddress\": \"4.4.4.6\",\n          \"ntpPort\": 556,\n          \"ntpIpVersion\": \"IPv4\"\n        }\n      ]\n    },\n    \"ptp\": {\n      \"ptpEnable\": false,\n      \"ptpEnableDebugPrints\": false,\n      \"ptpUseLegacyHW\": false,\n      \"ptpIpType\": \"Multicast\",\n      \"ptpIpVer\": \"IPv4\",\n      \"ptpDomainNumber\": 44,\n      \"ptpInputInterface\": \"-1\",\n      \"ptpIp\": \"0.0.0.0\",\n      \"ptpBmcaEnable\": false,\n      \"ptpBmcaIpAddress\": \"0.0.0.0\",\n      \"ptpBmcaTimeout\": 2\n    }\n  },\n  \"snmp\": {\n    \"enableSnmp\": true,    \n    \"trapListeners\": [\n      \n    ],\n    \"snmpConfiguration\": {\n      \"communityNameforGet\": \"\",\n      \"communityNameforSet\": \"\"\n    }\n  },\n  \"syslog\": {\n    \"syslogServers\": [\n      {\n        \"syslogIp\": \"0.0.0.0\",\n        \"syslogPort\": 514,\n        \"syslogDescription\": \"\"\n      },\n      {\n        \"syslogIp\": \"127.0.0.1\",\n        \"syslogPort\": 514,\n        \"syslogDescription\": \"\"\n      }\n    ]\n  },\n    \"dns\": {\n        \"dnsServers\": [\n            \"1.2.3.4\",\n            \"5.6.7.8\"\n        ],\n        \"dnsIfcs\": [\n              \"34001\",\n              \"34002\"\n        ],\n        \"dnsPort\": 1234,\n        \"dnsRetries\": 1,\n        \"dnsTimeout\": 10,\n        \"dnsDomainName\": \"domainName\"\n    },\n    \"dpi\": {\n        \"dpiPort\": 5000,\n        \"dpiComplianceMode\": \"DVS\",\n        \"dpiFailIsDrt\": false,\n        \"dpiFailThreshold\": 1000\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response Example - Updated 200": [
          {
            "group": "Response Example - Updated 200",
            "type": "String",
            "optional": false,
            "field": "Object",
            "description": "<p>ID of Updated Platform object</p>"
          }
        ]
      }
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Platform",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Create/Update SCG",
    "version": "4.2.0",
    "group": "SCG",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scg.id",
            "description": "<p>Unique String field Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scg.tag",
            "description": "<p>scg</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scg.parentId",
            "description": "<p>String field linked to the Parent node/object (scgs) – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scg.parentTag",
            "description": "<p>scgs – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scg.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "scg.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "scg.parameters.general.scgId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "scg.parameters.general.multipleTs",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "scg.parameters.general.networkID",
            "description": "<p>Relevant only if multipleTs is false. Field which will be used to link to the Network object. Don't use when multipleTs is true</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "scg.parameters.general.mpegTSid",
            "description": "<p>Relevant only if multipleTs is false. Field which will be used to link to the Ts Out object. Don't use when multipleTs is true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scg.parameters.general.overrideScrMode",
            "description": "<p>None (D), DVB CSA v1 / DVB CSA v2 with CW Conformance / DVB CSA v2 without CW Conformance / DVB CSA v3 / AES CBC / AES CBC - T / AES ECB / AES ECB - T / P-code</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "scg.parameters.ecmList",
            "description": "<p>List</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scg.parameters.ecmList.ecmId",
            "description": "<p>Hexadecimal field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scg.parameters.ecmList.superCasId",
            "description": "<p>Hexadecimal String field - Field which will be used to link to the Super CAS ID of an existing ECMG</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scg.parameters.ecmList.accessCriteria",
            "description": "<p>Hexadecimal field (D: 01 - String length 0:512 characters and length must be a multiple of 2 characters)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "scg.parameters.programList",
            "description": "<p>List</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "scg.parameters.programList.mpegSrvId",
            "description": "<p>Field which will be used to link to the Output Srv Id under the specific mpegTSid defined at the general section if multipleTs is false or with next mpegTsId and networkID when multipleTs is true</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "scg.parameters.programList.networkID",
            "description": "<p>Relevant only if multipleTs is true. Field which will be used to link Output Srv to the Network object. Don't use when multipleTs is false</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "scg.parameters.programList.mpegTSid",
            "description": "<p>Relevant only if multipleTs is true. Field which will be used to link Output Srv to the Ts Out object. Don't use when multipleTs is false</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "scg.parameters.pidList",
            "description": "<p>List</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "scg.parameters.pidList.outPid",
            "description": "<p>Field which will be used to link to the Output PID under the specific mpegTSid defined at the general section if multipleTs is false or with next mpegTsId and networkID when multipleTs is true</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "scg.parameters.pidList.networkID",
            "description": "<p>Relevant only if multipleTs is true. Field which will be used to link Output PID to the Network object. Don't use when multipleTs is false</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "scg.parameters.pidList.mpegTSid",
            "description": "<p>Relevant only if multipleTs is true. Field which will be used to link Output PID to the Ts Out object. Don't use when multipleTs is false</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "scg.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - create scg",
          "content": "{\n    \"tag\": \"scg\",\n    \"action\": \"create\",\n    \"parentTag\": \"scgs\",\n    \"parentId\": \"10901\",\n    \"parameters\": {\n        \"general\": {\n            \"scgId\": 1,\n            \"multipleTs\":false,\n            \"networkID\": 1,\n            \"mpegTSid\": 231,\n            \"overrideScrMode\": \"None\"\n        },\n        \"ecmList\": [\n            {\n                \"ecmId\": \"0x44\",\n                \"superCasId\": \"0x10000\",\n                \"accessCriteria\": \"0x01\"\n            }\n        ],\n        \"programList\": [\n            {\n                \"mpegSrvId\": 1\n            }\n        ]\n    }\n}",
          "type": "json"
        },
        {
          "title": "Request Example - update scg",
          "content": "{\n    \"tag\": \"scg\",\n    \"action\": \"update\",\n    \"id\": \"57001\",\n    \"parameters\": {\n        \"general\": {\n            \"scgId\": 1,\n            \"networkID\": 1,\n            \"mpegTSid\": 231,\n            \"overrideScrMode\": \"None\"\n        },\n        \"ecmList\": [\n            {\n                \"ecmId\": \"0x44\",\n                \"superCasId\": \"0x10000\",\n                \"accessCriteria\": \"0x01\"\n            }\n        ],\n        \"programList\": [\n            {\n                \"mpegSrvId\": 1\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "SCG",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/restapi/v4/conf?tag=siDomain&id=:id",
    "title": "SIDomain Get",
    "version": "4.2.0",
    "name": "SIDomainGet",
    "group": "SIPSI",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique String field</p>"
          }
        ]
      }
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "SIPSI",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf?tag=siDomain&id=:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "SIDomain Post",
    "version": "4.2.0",
    "name": "SIDomainPost",
    "group": "SIPSI",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "siDomain.id",
            "description": "<p>Unique String field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "siDomain.tag",
            "description": "<p>siDomain</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"create\"",
              "\"get\"",
              "\"update\"",
              "\"delete\""
            ],
            "optional": false,
            "field": "siDomain.action",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "siDomain.parentTag",
            "description": "<p>siDomains - Relevant only for action: create</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "siDomain.parentId",
            "description": "<p>String field linked to the Parent node/object - Relevant only for action: create</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "siDomain.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "siDomain.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..40",
            "optional": false,
            "field": "siDomain.parameters.general.name",
            "description": "<p>SI Domain name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique String field of created element</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Create Example",
          "content": "{\n  \"tag\": \"siDomain\",\n  \"action\": \"create\",\n  \"parentTag\": \"siDomains\",\n  \"parentId\": \"130001\",\n  \"parameters\": {\n    \"general\": {\n      \"name\": \"newDomain\"\n    }\n  }\n}",
          "type": "json"
        },
        {
          "title": "Update Example",
          "content": "{\n  \"tag\": \"siDomain\",\n  \"action\": \"update\",\n  \"id\": \"130004\"\n  \"parameters\": {\n    \"general\": {\n      \"name\": \"updatedDomain\"\n    }\n  }\n}",
          "type": "json"
        },
        {
          "title": "Delete Example",
          "content": "{\n  \"tag\": \"siDomain\",\n  \"action\": \"delete\",\n  \"id\": \"130004\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "SIPSI",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/restapi/v4/conf?tag=siPsipGenerator&id=:id",
    "title": "SI/PSIP Generator Get",
    "version": "4.2.0",
    "name": "SIPSIPGeneratorGet",
    "group": "SIPSI",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique String field</p>"
          }
        ]
      }
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "SIPSI",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf?tag=siPsipGenerator&id=:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "SI/PSIP Generator Post",
    "version": "4.2.0",
    "name": "SIPSIPGeneratorPost",
    "group": "SIPSI",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "siPsipGenerator.id",
            "description": "<p>Unique String field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "siPsipGenerator.tag",
            "description": "<p>siPsipGenerator</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"create\"",
              "\"get\"",
              "\"update\"",
              "\"delete\""
            ],
            "optional": false,
            "field": "siPsipGenerator.action",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "siPsipGenerator.parentTag",
            "description": "<p>siPsipGenerators - Relevant only for action: create</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "siPsipGenerator.parentId",
            "description": "<p>String field linked to the Parent node/object - Relevant only for action: create</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "siPsipGenerator.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "siPsipGenerator.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..40",
            "optional": false,
            "field": "siPsipGenerator.parameters.general.name",
            "description": "<p>SI/PSIP Genearator name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "siPsipGenerator.parameters.general.ipAddress",
            "description": "<p>SI/PSIP Genearator ip address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "siPsipGenerator.parameters.general.ipMask",
            "description": "<p>SI/PSIP Genearator ip mask</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Management Network\"",
              "\"CAS Network\""
            ],
            "optional": false,
            "field": "siPsipGenerator.parameters.general.activeNetwork",
            "description": "<p>SI/PSIP Genearator active network</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique String field of created element</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Create Example",
          "content": "{\n  \"tag\": \"siPsipGenerator\",\n  \"action\": \"create\",\n  \"parentId\": \"120001\",\n  \"parentTag\": \"siPsipGenerators\",\n  \"parameters\": {\n    \"general\": {\n      \"name\": \"newGenerator\",\n      \"ipAddress\": \"1.2.3.4\",\n      \"ipMask\": \"255.255.255.0\",\n      \"activeNetwork\": \"CAS Network\"\n    }\n  }\n}",
          "type": "json"
        },
        {
          "title": "Update Example",
          "content": "{\n  \"tag\": \"siPsipGenerator\",\n  \"action\": \"update\",\n  \"id\": \"120002\",\n  \"parameters\": {\n    \"general\": {\n      \"name\": \"updatedGenerator\",\n      \"ipAddress\": \"5.6.7.8\",\n      \"ipMask\": \"255.255.255.255\",\n      \"activeNetwork\": \"CAS Network\"\n    }\n  }\n}",
          "type": "json"
        },
        {
          "title": "Delete Example",
          "content": "{\n  \"tag\": \"siPsipGenerator\",\n  \"action\": \"delete\",\n  \"id\": \"120002\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "SIPSI",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Create/Update Vlan",
    "version": "4.2.0",
    "group": "Vlan",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vlan.id",
            "description": "<p>Unique String field – Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vlan.tag",
            "description": "<p>vlan</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vlan.parentId",
            "description": "<p>String field linked to the Parent node/object (ipPort) – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vlan.parentTag",
            "description": "<p>ipPort – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vlan.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "vlan.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vlan.parameters.description",
            "description": "<p>Alphanumeric field (e.g. &quot;VLAN 10, &quot;eth-3&quot;, ASI Port 1, etc)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vlan.parameters.vid",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "vlan.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vlan.parameters.general.vIPAddr",
            "description": "<p>IP address format (only IPv4)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vlan.parameters.general.vIPMask",
            "description": "<p>Mask address format (IPv4)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vlan.parameters.general.vIPGW",
            "description": "<p>IP address format (IPv4)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "vlan.parameters.general.dei",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vlan.parameters.general.pcp",
            "description": "<p>0 (D), 1, 2, 3, 4, ,5, 6, 7</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - create vlan",
          "content": "{   \n   \"tag\": \"vlan\",\n   \"parentId\": \"34006\",\n   \"parentTag\": \"ipPort\",\n   \"action\": \"create\",\n   \"parameters\": {\n     \"description\": \"VLAN 10\",\n     \"vid\": 112,\n     \"general\": {\n      \"vIPAddr\": \"192.158.99.2\",\n      \"vIPMask\": \"255.255.255.0\",\n      \"vIPGW\": \"192.158.99.1\",\n      \"dei\": true,\n      \"pcp\": 2\n     }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response Example - Created 201": [
          {
            "group": "Response Example - Created 201",
            "type": "String",
            "optional": false,
            "field": "Object",
            "description": "<p>ID of Created Vlan object</p>"
          }
        ]
      }
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "Vlan",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  },
  {
    "version": "4.2.0",
    "group": "outPid",
    "type": "post",
    "url": "/restapi/v4/conf",
    "title": "Create or Update outPid",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outPid.id",
            "description": "<p>Unique String field - Relevant for update/delete/get “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outPid.tag",
            "description": "<p>outPid Applicable for Services PIDs, OutUnrefPid Applicable for Unreferenced PID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outPid.parentId",
            "description": "<p>String field linked to the Parent node/object, outSrv Applicable for Services PIDs – Relevant for Create “action”, OutTS Applicable for Unreferenced PIDs – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outPid.parentTag",
            "description": "<p>outSrv / OutTS – Relevant for Create “action”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outPid.action",
            "description": "<p>create/update/delete/get</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outPid.parameters",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outPid.parameters.general",
            "description": "<p>Section for Mandatory General fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outPid.parameters.general.outPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outPid.parameters.general.outEsType",
            "description": "<p>Numeric field Not Relevant for unreferenced PIDs</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outPid.parameters.general.remuxMode",
            "description": "<p>pid (D) / component / esType  Not Relevant for unreferenced PIDs</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "outPid.parameters.general.pid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outPid.parameters.general.pid.inTS",
            "description": "<p>String field which will be used to link to the Input TS object</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outPid.parameters.general.pid.inPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outPid.parameters.general.pid.inPcrPid",
            "description": "<p>PID Numeric field (Decimal values) – Not Relevant for unreferenced PIDs</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "outPid.parameters.general.component",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outPid.parameters.general.component.inTS",
            "description": "<p>String field which will be used to link to the Input TS object</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outPid.parameters.general.component.inPrg",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outPid.parameters.general.component.componentId",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outPid.parameters.general.component.inPcrPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "outPid.parameters.general.esType",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outPid.parameters.general.esType.inTS",
            "description": "<p>String field which will be used to link to the Input TS object</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outPid.parameters.general.esType.inPrg",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outPid.parameters.general.esType.inEsType",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outPid.parameters.general.esType.lang",
            "description": "<p>String filed</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outPid.parameters.general.esType.otherLang",
            "description": "<p>String filed</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outPid.parameters.general.esType.inPcrPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "outPid.parameters.general.redTriggers",
            "description": "<p>Not Relevant for unreferenced PIDs</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outPid.parameters.general.redTriggers.pidUnderflow",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outPid.parameters.general.redTriggers.pidMinBitrate",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outPid.parameters.general.redTriggers.pidMaxBitrate",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "outPid.parameters.general.spsSrcList",
            "description": "<p>List up to 2 objects</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outPid.parameters.general.spsSrcList.id",
            "description": "<p>Unique String field – Object index</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outPid.parameters.general.spsSrcList.spsSrcTSid",
            "description": "<p>String field which will be used to link to the Input TS object</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outPid.parameters.general.spsSrcList.spsSrcSrvMpegID",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outPid.parameters.general.spsSrcList.spsSrcPcrPid",
            "description": "<p>PID Numeric field (Decimal values)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "outPid.parameters.general.pcr",
            "description": "<p>Not Relevant for unreferenced PIDs</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outPid.parameters.general.pcr.modePcr",
            "description": "<p>Follow Input (D) / Internal / Remove</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outPid.parameters.general.advance",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outPid.parameters.general.advance.ccReStamp",
            "description": "<p>false (D) / true</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outPid.parameters.general.advance.pidPriority",
            "description": "<p>String field 'Follow Program' (D) / 'Priority 1' (old mode name 'High') / 'Priority 2' ('Normal') / 'Priority 3' ('Medium') / 'Priority 4' ('Low') / 'Priority 5' / ... / 'Priority 12'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outPid.parameters.general.advance.presenceDetection",
            "description": "<p>Disable / Enable (When Inpput is Valid) (D) / Enable (Always)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outPid.parameters.general.advance.scrOverride",
            "description": "<p>None (D) / Always Scrambled / Always Clear</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outPid.parameters.general.advance.delay",
            "description": "<p>Numeric field (0 (D))</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outPid.parameters.general.advance.maxOutBitrate",
            "description": "<p>Numeric field (0 (D))</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outPid.parameters.serRedList",
            "description": "<p>List up to 6 objects</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outPid.parameters.serRedList.serRedSrcTSid",
            "description": "<p>String field which will be used to link to the Input TS object</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outPid.parameters.serRedList.serRedSrcPid",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outPid.parameters.serRedList.serRedSrcPcrPid",
            "description": "<p>Numeric field</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outPid.parameters.serRedList.serRedBlockPid",
            "description": "<p>should alternative source be used</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outPid.parameters.serRedList.serRedPriority",
            "description": "<p>Alternative source priority<br/>Range: 0-6, with 0 being the same priority as the main source<br/>Relevant for Automatic Revert redundancy mode</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "outPid.parameters.serRedList.serRedSubPriority",
            "description": "<p>Alternative source sub priority - defines order of entities with the same priority<br/>Range: 1-6<br/>Relevant for Automatic Revert redundancy mode</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "outPid.parameters.dataTrack",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "outPid.parameters.dataTrack.excludeFromDataTrack",
            "description": "<p>false (D) / true</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example - update outPid",
          "content": "{\n   \"id\": \"5100002\",\n   \"tag\": \"outPid\",\n   \"action\": \"update\",\n   \"parameters\": {\n       \"general\": {\n           \"outPid\": 32,\n           \"outEsType\": 2,\n           \"remuxMode\": \"component\",\n           \"component\": {\n               \"inTS\": \"4000001\",\n               \"inPrg\": 19,\n               \"componentId\": 18,\n               \"inPcrPid\": 8191\n           }\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response Example - Created 201": [
          {
            "group": "Response Example - Created 201",
            "type": "String",
            "optional": false,
            "field": "Object",
            "description": "<p>ID of Created outPid object</p>"
          }
        ]
      }
    },
    "filename": "apidoc/doc.js",
    "groupTitle": "outPid",
    "name": "PostRestapiV4Conf",
    "sampleRequest": [
      {
        "url": "https://<IP Address>/restapi/v4/conf"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>application/json, application/xml, text/yaml, text/plain.</p>"
          }
        ]
      }
    }
  }
] });
