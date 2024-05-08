# node-mysql-app
学生管理系统网页开发项目
#项目说明
<br>本项目使用Nodejs进行后端开发，JavaScript进行前端开发，使用MySQL数据库
<br>前端使用jQury和Ajax技术，后端使用express框架和body-parser中间件
<br>相关技术可以通过我的博客查看https://mdyknight.wordpress.com/
<br>
#项目结构
```
NODE-MYSQL-APP
    ├─node_modules//node的npm包及其依赖
    │  ├─.bin
    │  ├─accepts
    │  ├─array-flatten
    │  ├─bignumber.js
    │  │  └─doc
    │  ├─body-parser
    │  │  └─lib
    │  │      └─types
    │  ├─bytes
    │  ├─call-bind
    │  │  ├─.github
    │  │  └─test
    │  ├─content-disposition
    │  ├─content-type
    │  ├─cookie
    │  ├─cookie-signature
    │  ├─core-util-is
    │  │  └─lib
    │  ├─debug
    │  │  └─src
    │  ├─define-data-property
    │  │  ├─.github
    │  │  └─test
    │  ├─depd
    │  │  └─lib
    │  │      └─browser
    │  ├─destroy
    │  ├─ee-first
    │  ├─encodeurl
    │  ├─es-define-property
    │  │  ├─.github
    │  │  └─test
    │  ├─es-errors
    │  │  ├─.github
    │  │  └─test
    │  ├─escape-html
    │  ├─etag
    │  ├─express
    │  │  └─lib
    │  │      ├─middleware
    │  │      └─router
    │  ├─finalhandler
    │  ├─forwarded
    │  ├─fresh
    │  ├─function-bind
    │  │  ├─.github
    │  │  └─test
    │  ├─get-intrinsic
    │  │  ├─.github
    │  │  └─test
    │  ├─gopd
    │  │  ├─.github
    │  │  └─test
    │  ├─has-property-descriptors
    │  │  ├─.github
    │  │  └─test
    │  ├─has-proto
    │  │  ├─.github
    │  │  └─test
    │  ├─has-symbols
    │  │  ├─.github
    │  │  └─test
    │  │      └─shams
    │  ├─hasown
    │  │  └─.github
    │  ├─http-errors
    │  ├─iconv-lite
    │  │  ├─encodings
    │  │  │  └─tables
    │  │  └─lib
    │  ├─inherits
    │  ├─ipaddr.js
    │  │  └─lib
    │  ├─isarray
    │  ├─media-typer
    │  ├─merge-descriptors
    │  ├─methods
    │  ├─mime
    │  │  └─src
    │  ├─mime-db
    │  ├─mime-types
    │  ├─ms
    │  ├─mysql
    │  │  ├─lib
    │  │  │  └─protocol
    │  │  │      ├─constants
    │  │  │      ├─packets
    │  │  │      └─sequences
    │  │  └─node_modules
    │  │      └─safe-buffer
    │  ├─negotiator
    │  │  └─lib
    │  ├─object-inspect
    │  │  ├─.github
    │  │  ├─example
    │  │  └─test
    │  │      └─browser
    │  ├─on-finished
    │  ├─parseurl
    │  ├─path-to-regexp
    │  ├─process-nextick-args
    │  ├─proxy-addr
    │  ├─qs
    │  │  ├─.github
    │  │  ├─dist
    │  │  ├─lib
    │  │  └─test
    │  ├─range-parser
    │  ├─raw-body
    │  ├─readable-stream
    │  │  ├─doc
    │  │  │  └─wg-meetings
    │  │  ├─lib
    │  │  │  └─internal
    │  │  │      └─streams
    │  │  └─node_modules
    │  │      └─safe-buffer
    │  ├─safe-buffer
    │  ├─safer-buffer
    │  ├─send
    │  │  └─node_modules
    │  │      └─ms
    │  ├─serve-static
    │  ├─set-function-length
    │  │  └─.github
    │  ├─setprototypeof
    │  │  └─test
    │  ├─side-channel
    │  │  ├─.github
    │  │  └─test
    │  ├─sqlstring
    │  │  └─lib
    │  ├─statuses
    │  ├─string_decoder
    │  │  ├─lib
    │  │  └─node_modules
    │  │      └─safe-buffer
    │  ├─toidentifier
    │  ├─type-is
    │  ├─unpipe
    │  ├─util-deprecate
    │  ├─utils-merge
    │  └─vary
    ├─views   //前端
    │   ├─index.html   起始界面
    │   ├─admin.html   管理员界面
    │   ├─stu.html   学生界面
    │   └─tea.html   教师界面  
    ├─app.js   //后端
    ├─package.json   //node配置依赖文件
    ├─package-lock.json   //自动生成的配置文件
    └─db.sql   //数据库创建操作
```

#使用说明
    项目clone到本地
    
    新建终端
    cd node-mysql-app
    npm i   //node版本18.17.1
    node app.js
成功运行会显示数据库连接成功，服务器运行在端口3000。
然后打开本地浏览器输入http://localhost:3000/查看项目
