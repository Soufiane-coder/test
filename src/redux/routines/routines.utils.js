export const checkRoutine = (routines, taskId) => {
  return routines.map((routine) => {
    if (routine.taskId === taskId) {
      routine.submitted = "1";
      routine.combo = +routine.combo + 1;
    }
    return routine;
  });
};
