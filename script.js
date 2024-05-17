const min=1;
const max=100;
const ans=Math.floor(Math.random()*(max-min+1)+min);

let attempts=0;
let guess;
let running=true;

while(running)
{
    guess=window.prompt(`Enter a no b/w ${max} - ${min}`);
    guess=Number(guess);

    if(isNaN(guess))
    {
        window.alert("Enter a valid number");
    }
    else if(guess<min || guess >max)
    {
        window.alert("Enter a number within the given range ");
    }
    else{
        attempts++;
        if(guess<ans)
        {
            window.alert("TOO LOW! TRY AGAIN");
        }

        else if(guess>ans)
        {
            window.alert("TOO HIGH! TRY AGAIN");
        }
        else{
            window.alert(`CORRECT!! The number was ${ans}. It took you ${attempts} attempts` );
            running=false;
        }
    }
}