function addnumbers()
{
    num1=Number(document.getElementById('firstnumber').value)
    num2=Number(document.getElementById('secondnumber').value)

    num3=num1 + num2

    document.getElementById('total').value=num3
}