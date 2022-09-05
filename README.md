# Stock Problem

## The Script calculates the stock problem about losses of material in the process of cutting.

### Things you can do:

- Use a JSON file to specify the cut size and the types of formats you want to cut like glass, wood and so on.
- When the script is executed you will get some arrays of cuts sizing material and the res will be the maximazation of that cut with the stock size as a delimiter 

<p>

    {
    stock: { size: 250, cost: 3 },
    count: 1,
    decimal: 0.5106383,
    cuts: [ 16, 16, 16, 100, 100 ]
    }
    The maximization of the cutting material is 248
    So we have a total loss of 2

    ------------------------------------------------------------------------------------------------------------
    {
    stock: { size: 250, cost: 3 },
    count: 1,
    decimal: 0.95744681,
    cuts: [ 16, 11, 11, 11, 100, 100 ]
    }
    The maximization of the cutting material is 249
    So we have a total loss of 1

    ------------------------------------------------------------------------------------------------------------
</p>



# INSTRUCTIONS
<code>yarn install</code> ou <code>npm install</code>

<code>node main.js glass<code>