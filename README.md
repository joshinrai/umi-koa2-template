# umi project
项目使用yarn，使用npm的话，包版本很多会不一致，

## 提高yarn速度
yarn config get registry
yarn config set registry 'https://registry.npm.taobao.org'

## 将server从ts编译为js
yarn compile/npm run compile

## 打包
yarn pkg/npm run pkg

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

## 配置说明

#### umi配置
umi配置在.umirc.ts中，其中proxy&router&layout配置拆出，放在/config下配置
关于配置参考 https://umijs.org/config
