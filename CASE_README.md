# Planes, trains and automobiles

## The Traffic Meister application assignment

 - Create a form which behaves as follows
    - It will display the following drop down menus
        - A list of vehicle types, on load there will be no vehicle selected.
        - A list of vehicle brands, on load and while there is no vehicle selected there will be no vehicle brand selected.
        - A list of vehicle brand colors, on load and while there is no vehicle brand selected there will be no vehicle brand color selected.
    - At the bottom of the form all selections will be shown.
  - You are free to use any tool and/or framework you like, as long as it runs inside a browser and you can explain why that solution will be the most favorable.
  - Your implementation should be
      - tested
      - visually attractive
      - deployable


## Data library

The data are provided by a small service you can find in the `service` folder.

This service can be accessed by a the global variable `trafficMeister` and provide a single method `fetchData`.

```
trafficMeister.fetchData(callBack);
```

The callback is called with the full data list as first parameter.

```
trafficMeister.fetchData(function(err, data) {
  console.log(data);
});
```

The data library can be used as a node module.

```
var trafficMeister = require('traffic-meister');
trafficMeister.fetchData(function(err, data) {
  console.log(data);
});
```
