const schema = {
    "components": [
        {
            "type": "table",
            "table": {
                "query": "MyWallets",
                "columns": [
                    {
                        "id": "Name",
                        "title": "Nazwa",
                        "sortable": false,
                        "type": 1
                    },
                    {
                        "id": "AmountSmallestUnit",
                        "title": "Saldo",
                        "sortable": true,
                        "type": 106
                    },
                    {
                        "id": "CurrencyCode",
                        "title": "Waluta",
                        "sortable": false,
                        "type": 1
                    },
                    {
                        "id": "DateCreated",
                        "title": "Data stworzenia",
                        "sortable": true,
                        "type": 202,
                        "filter": {
                            "variant": "range",
                            "field": "DateCreatedFilter",
                            "type": 202
                        }
                    },
                    {
                        "id": "SampleEnum",
                        "title": "Przykładowy enum",
                        "sortable": false,
                        "type": "Kontomierz.Finances.Contracts.Wallets.SampleEnumDTO"
                    }
                ]
            }
        }
    ],
    "enumsMaps": {
        "Kontomierz.Finances.Contracts.Wallets.SampleEnumDTO": [
            [
                0,
                "Wartość A"
            ],
            [
                1,
                "Wartość B"
            ]
        ]
    }
} as const;

export default schema;