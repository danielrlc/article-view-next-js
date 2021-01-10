## Authentication notes

From the [Swagger UI page](https://lettera.api.ksfmedia.fi/v3/swagger-ui/#/articles/get_article__uuid_), I entered:

AuthUser: f47e9cf2-7a71-47a7-8445-68eaccec481b
Authorization: `Bdt0iGQRu0A4GkdhLD8527gwzg4wMEHyRCySy3FPgxklAgeL`
(note that the backticks were needed. Real weird!)
uuid: d260322f-608d-46c6-be09-f25adeb94371

The backticks were needed in the Curl request too:

```bash
curl -X GET "https://lettera.api.ksfmedia.fi/v3/article/d260322f-608d-46c6-be09-f25adeb94371?textonly=false" -H "accept: application/json;charset=utf-8" -H "AuthUser: f47e9cf2-7a71-47a7-8445-68eaccec481b" -H "Authorization: `Bdt0iGQRu0A4GkdhLD8527gwzg4wMEHyRCySy3FPgxklAgeL`"
```
