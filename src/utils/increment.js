export const getNextId = async (Model) => {
  const count = await Model.countDocuments();
  return count + 1; // auto increment
};

export const shiftIdsAfterDelete = async (Model, deletedId) => {
  const items = await Model.find({ id: { $gt: deletedId } }).sort({ id: 1 });

  for (const item of items) {
    item.id = item.id - 1;
    await item.save();
  }
};
