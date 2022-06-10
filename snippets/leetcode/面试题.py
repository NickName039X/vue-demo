from itertools import product
import re
def f(s):
  n=re.sub(r'\[[^\]]+\]|\([^\)]+\)','%s',s)#格式化字符串 方便后面直接替换
  print(n)
  t=[i for i in re.findall(r'\[[^\]]+\]|\([^\)]+\)',s)]#正则匹配取得所有 []() 以及内部内容
  print(t)
  t=[re.sub(r'[\]\(\)]','',i).replace('[','|').split('|') for i in t]# 遍历所有取到的列表 把 ]() 删掉 [ 替换成 ''(空白)
  print(t)
  t=[i for i in product(*t)]#把列表排列组合
  print(t)
  t=[n%i for i in t]#把排列组合结果一一对应填入格式化过的母字符串
  print(t)

s='我要去[一|二]的地方吃(三|四)可以吗?我要去[五六|七八九]的地方吃(六六六|777)可以吗?'
f(s)
