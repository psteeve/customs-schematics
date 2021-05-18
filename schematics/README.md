# Getting Started With Customs Schematics

## STEP 0

The first time you use it, you have to link it to the project so

- `cd schematics`
- `npm install`
- `npm run build`
- `npm link`
- `cd ..`
- `npm link schematics`

`cd ../node_modules/`

`ln -s ../schematics/ .`

## STEP 1

`cd <A ModuleFeature Directory>`

## Feature

To create a feature

`ng g schematics:feature NAME`

or

`ng g schematics:fea NAME`

### Business

To create a business

`ng g schematics:business NAME`

or

`ng g schematics:bus NAME`

To create an accessor component
`ng g schematics:acc NAME`
