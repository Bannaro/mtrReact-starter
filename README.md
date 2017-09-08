# mtrReact-starter

Here is a starter architecture I use in order to start a Meteor project with React and Redux.
This the one I use, and there is not only one, you can use your own.

# Architecture

There's three main folder **Client**, **Server** and **Imports**.    
**Client** store the entry point of your app.    
**Server** store all you need to run on server's side.    
**Imports** store all the file witch will be included in either **Client Side** or **Server Side**.

# Imports

In this folder you can found a lot of nested folders but nothing too complicated.

  - **actions**
  - **collections**
  - **constants**
  - **helpers**
  - **hooks**
  - **methods**
  - **publications**
  - **reducers**
  - **routes**
  - **store**
  - **ui**
  
Let's begin from the root 

## Actions

This is where you'll find every actions called by your client, once called an action will trigger a change of state in the redux's stroe or call a method executed by the server side.    
You'll import an action in the **Component** it should be triggered.

## Collections

This si where you'll define each and every **Mongo Collection** you'll need.    
If you have **Collection2** or **simpl-schem** you can define the schema of your collections here.    
You can also define some utils functions regarding the props of your collections.

## Constants

In this folder you'll store each and every constant you'll use, it can be form's name, method's name, subcription's name etc...    
It'll be usefull when you will use React with Redux.

## Helpers

## Hooks

## Methods

Store the methods

## Publications

Store the publications

## Reducers

## Routes

In there you'll store each and every routes needed, using react-router while binding the redux store.    
Doing so you'll be able to access the store everywhere in your app.

## Store

This is where you'll construct your store by importing your reducers

## UI

Store the components and their containers, each containers will be linked the store so we can access the store throught the component.


