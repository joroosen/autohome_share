[
    {
        "id": "481789b2f70354e1",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "115ada30.1743c6",
        "type": "tuya-local",
        "z": "481789b2f70354e1",
        "devName": "socket1",
        "devIp": "10.10.4.81",
        "devId": "82180707adcfa6743a",
        "devKey": "d189ad7b927d1dac",
        "protocolVer": "3.3",
        "x": 520,
        "y": 480,
        "wires": [
            [
                "88349073.f9906"
            ]
        ]
    },
    {
        "id": "f21e12d7.a9512",
        "type": "inject",
        "z": "481789b2f70354e1",
        "name": "",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "true",
        "payloadType": "bool",
        "x": 320,
        "y": 540,
        "wires": [
            [
                "115ada30.1743c6"
            ]
        ]
    },
    {
        "id": "19a51c7b.2203e4",
        "type": "inject",
        "z": "481789b2f70354e1",
        "name": "",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "false",
        "payloadType": "bool",
        "x": 320,
        "y": 580,
        "wires": [
            [
                "115ada30.1743c6"
            ]
        ]
    },
    {
        "id": "88349073.f9906",
        "type": "debug",
        "z": "481789b2f70354e1",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 700,
        "y": 480,
        "wires": []
    },
    {
        "id": "797d431a.95651c",
        "type": "inject",
        "z": "481789b2f70354e1",
        "name": "{\"set\": true, \"dps\" : 1}",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "{\"set\": true, \"dps\" : 1}",
        "payloadType": "json",
        "x": 280,
        "y": 500,
        "wires": [
            [
                "115ada30.1743c6"
            ]
        ]
    },
    {
        "id": "90a67db.6f94d8",
        "type": "inject",
        "z": "481789b2f70354e1",
        "name": "request",
        "props": [
            {
                "p": "payload",
                "v": "request",
                "vt": "str"
            },
            {
                "p": "topic",
                "v": "",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "request",
        "payloadType": "str",
        "x": 320,
        "y": 420,
        "wires": [
            [
                "115ada30.1743c6"
            ]
        ]
    },
    {
        "id": "8d81b2e6.7d0b4",
        "type": "inject",
        "z": "481789b2f70354e1",
        "name": "disconnect",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "disconnect",
        "payload": "disconnect",
        "payloadType": "str",
        "x": 310,
        "y": 380,
        "wires": [
            [
                "115ada30.1743c6"
            ]
        ]
    },
    {
        "id": "b1231ec7.fadc6",
        "type": "inject",
        "z": "481789b2f70354e1",
        "name": "connect ",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "connect",
        "payloadType": "str",
        "x": 320,
        "y": 340,
        "wires": [
            [
                "115ada30.1743c6"
            ]
        ]
    },
    {
        "id": "e23704b.8e613f8",
        "type": "inject",
        "z": "481789b2f70354e1",
        "name": "{\"set\": false, \"dps\" : 1}",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "{\"set\": false, \"dps\" : 1}",
        "payloadType": "json",
        "x": 270,
        "y": 460,
        "wires": [
            [
                "115ada30.1743c6"
            ]
        ]
    },
    {
        "id": "778d17d6.8d4d28",
        "type": "inject",
        "z": "481789b2f70354e1",
        "name": "",
        "props": [
            {
                "p": "payload",
                "v": "toggle",
                "vt": "str"
            },
            {
                "p": "topic",
                "v": "",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "toggle",
        "payloadType": "str",
        "x": 320,
        "y": 620,
        "wires": [
            [
                "115ada30.1743c6"
            ]
        ]
    }
]
