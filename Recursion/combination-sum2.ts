//question link: https://leetcode.com/problems/combination-sum-ii/
/* 
 intuition: 
  when finding all subsets from a given array , 
   you have two options :
     1) include(pick) the value in the current index 
     2) exclude the value 
    and move to the next value;
    here each number can only be picked once so if i have not picked the candidate once i am not going to pick its next occurance also 
    so increasing the index would save computation time 
*/
function combinationSum2(candidates: number[], target: number): number[][] {
    const subsets:number[][]=[];
    const subSets=new Set<string>();
    getCombinationSum(candidates.sort((a,b)=>a-b),target,[],0,subSets);
    for(let subset of subSets){
        subsets.push(JSON.parse(subset));
    }
    return subsets;
};

function getCombinationSum(candidates:number[],target:number,ds:number[],index:number,subSets:Set<string>){
   if(target===0){
        subSets.add(JSON.stringify(ds));
        return ;
   }
   if(target<0||index>=candidates.length){
       return;
   }
   const currentValue=candidates[index]
   if(currentValue===candidates[index])
   ds.push(currentValue)
   getCombinationSum(candidates,target-currentValue,ds,index+1,subSets);
   ds.pop();
     while (index + 1 < candidates.length && candidates[index] == candidates[index + 1]) {
            index+= 1
        }
   getCombinationSum(candidates,target,ds,index+1,subSets);
}