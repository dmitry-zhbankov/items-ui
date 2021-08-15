export class ListViewModel {
  constructor(items, showEditDialog, editItem) {
    this.items = items ?? [];
    this.showEditDialog = showEditDialog;
    this.editItem = editItem;
  }
}