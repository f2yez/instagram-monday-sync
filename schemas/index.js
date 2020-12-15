const schemas = [
        {
            "displayName": "car",
            "id": "car",
            "allowedOperations": [
                "get",
                "find",
                "count",
                "update",
                "insert",
                "remove"
            ],
            "maxPageSize": 50,
            "ttl": 3600,
            "fields": {
                "_id": {
                    "displayName": "_id",
                    "type": "text",
                    "queryOperators": [
                        "eq", "lt", "gt", "hasSome", "and", "lte", "gte",
                        "or", "not", "ne", "startsWith", "endsWith"
                    ]
                },
                "_owner": {
                    "displayName": "_id",
                    "type": "text",
                    "queryOperators": [
                        "eq", "lt", "gt", "hasSome", "and", "lte", "gte",
                        "or", "not", "ne", "startsWith", "endsWith"
                    ]
                },
                "itemId": {
                    "displayName": "Item Id",
                    "type": "text",
                    "queryOperators": [
                        "eq", "lt", "gt", "hasSome", "and", "lte", "gte",
                        "or", "not", "ne", "startsWith", "endsWith"
                    ]
                },
                "name": {
                    "displayName": "Name",
                    "type": "text",
                    "queryOperators": [
                        "eq", "lt", "gt", "hasSome", "and", "lte", "gte",
                        "or", "not", "ne", "startsWith", "endsWith"
                    ]
                }
            }
        }
    ];

module.exports = {
    schemas
}