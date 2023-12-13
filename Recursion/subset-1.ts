
//question link: https://leetcode.com/problems/subsets/
/* 
 intuition: 
  when finding all subsets from a given array , 
   you have two options :
     1) include(oick) the value in the current index
     2) exclude the value 
    and move to the next value;
*/
function subsets(nums: number[]): number[][] {
    const subsets=findSubsets(0,[],nums);
    return [...new Set([...subsets])];
};

function findSubsets(index:number,ds:number[],nums:number[]):number[][]{
  if(index>=nums.length){
      return [[...ds]];
  }
  if(nums.length<=0){
      return [[]];
  }
  const pick=findSubsets(index+1,[...ds,nums[index]],nums);
  const dontpick=findSubsets(index+1,[...ds],nums);
  return [...pick,...dontpick];
}