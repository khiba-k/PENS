cURL command to test code:

curl -X POST http://localhost:5000/events -H "Content-Type: application/json" -d '{
"name": "Entrepreneurship Seminar",
"location": "Dublin, Ireland",
"price": 500.oo,
"description": "An entrepreneurship seminar featuring the best moguls in the world."
}'

curl -X GET http://localhost:5000/events
