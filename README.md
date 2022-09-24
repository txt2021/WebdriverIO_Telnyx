# WebdriverIO_Telnyx

Project for testing Telnyx website: https://telnyx.com/ using WebdriverIO

20 test cases for sign up, blog, saving calculator, navigation, waitlist and social netwoks areas
## Requirements
WebdriverIo: v7

Node.js : 14^

## Install
```
git clone https://github.com/txt2021/WebdriverIO_Telnyx.git
```

```
npm install 
```

## Run

You can run all tests in the same time or one by une using an appropriate scripts

All specs can be runing in Google Chrome, Microsoft Edge and Mozila Firefox browsers

All tests in Chrome - ```npm run wdio:test:chrome```

All tests in Chrome(UI) - ```npm run wdio```

All tests in Edge - ```npm run wdio:test:edge```

All tests in Firefox - ```wdio:test:firefox```


Separate specs in Chrome:

```npm run wdio:test:chrome:blog_spec```

```npm run wdio:test:chrome:docs_spec```

```npm run wdio:test:chrome:navigation_spec```

```npm run wdio:test:chrome:calculator_spec```

```npm run wdio:test:chrome:signup_spec```

```npm run wdio:test:chrome:media_spec```


Separate specs in Firefox:

```npm run wdio:test:firefox:blog_spec```

```npm run wdio:test:firefox:docs_spec```

```npm run wdio:test:firefox:navigation_spec```

```npm run wdio:test:firefox:calculator_spec```

```npm run wdio:test:firefox:signup_spec```

```npm run wdio:test:firefox:media_spec```


Separate specs in Edge:

```npm run wdio:test:edge:blog_spec```

```npm run wdio:test:edge:docs_spec```

```npm run wdio:test:edge:navigation_spec```

```npm run wdio:test:edge:calculator_spec```

```npm run wdio:test:edge:signup_spec```

```npm run wdio:test:edge:media_spec```


Separate specs in UI(in Chrome):

```npm run wdio:test:blog_spec```

```npm run wdio:test:docs_spec```

```npm run wdio:test:navigation_spec```

```npm run wdio:test:calculator_spec```

```npm run wdio:test:signup_spec```

```npm run wdio:test:media_spec```



## Generate report
```
npm run report-generate
```

## Open report
```
report-open
```

