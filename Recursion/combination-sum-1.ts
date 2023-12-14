//question link: https://leetcode.com/problems/subsets/
/* 
 intuition: 
  when finding all subsets from a given array , 
   you have two options :
     1) include(pick) the value in the current index 
     2) exclude the value 
    and move to the next value;
    here you have a choice to pick a number any number of times so if you are  picking a number call the recursive
    function with the same index and the new target.
*/

function combinationSum(candidates: number[], target: number): number[][] {
    const subsets:number[][]=[]
     getCombinationSum(candidates,target,[],0,subsets);
     return subsets;
};

function getCombinationSum(candidates:number[],target:number,ds:number[],index:number,subsets:number[][]){
   if(target===0){
       subsets.push(ds);
        return ;
   }
   if(target<0||index>=candidates.length){
       return;
   }
   const currentValue=candidates[index]
   getCombinationSum(candidates,target-currentValue,[...ds,currentValue],index,subsets);
   getCombinationSum(candidates,target,ds,index+1,subsets);
}