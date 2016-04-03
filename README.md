# gunpla_webscraper

Built by scraping [this gundam wiki page](http://gundam.wikia.com/wiki/Master_Grade) using Python and hosted on Firebase.

Read this companion [article](https://medium.com/@jorick.caberio/building-a-gunpla-api-using-python-selenium-phantomjs-and-firebase-e68143d3fd3c#.q165qijr4) if you're interested in the implementation details.

### Base URL
https://dazzling-torch-4133.firebaseio.com/

### Get all MG Gunpla kits
**GET**  /gundams.json
![get all](http://i.imgur.com/yomq8f2.png)

### Get MG Gunpla kit by id
**GET**  /gundams/{id}.json
![get by id](http://i.imgur.com/F4MQTkN.png)
