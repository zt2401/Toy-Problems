var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
      for (var z = 0; z < nums.length; z++) {
          if (nums[i] + nums[z] === target) {
              return [i, z];
          }
      }
  }
  return null;
};