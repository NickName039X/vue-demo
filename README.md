# nginx 配置
````
http:{ 
      gzip on; //开启或关闭gzip on off
      gzip_disable "msie6"; #不使用gzip IE6
      gzip_min_length 100k; #gzip压缩最小文件大小，超出进行压缩（自行调节）
      gzip_buffers 4 16k; #buffer 不用修改
      gzip_comp_level 8; #压缩级别:1-10，数字越大压缩的越好，时间也越长
      gzip_types text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png; #  压缩文件类型 
}
```

包含了最新的typescript练习题
