function mincost(arr)
{ 
//write your code here
// return the min cost
	let sum=0;
	
	while(arr.length>0)
		{
			arr.sort((a,b)=>{
				return a-b;
			});

			let num1=arr[0];
			
			if(arr.length>=2)
			{
				num1+=arr[1];
			}

			sum+=num1;

			arr.shift();
			arr.shift();

			if(arr.length<=0)
			{
				break;
			}
			
			arr.push(num1);
			
		}

	return sum;
  
}

  
}

module.exports=mincost;
