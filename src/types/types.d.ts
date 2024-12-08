// Interface pour les composants du toolkit
export interface OrionBreadcrumbProps {
  items: Array<{ label: string; url: string }>;
}

export interface OrionTableColumn {
  key: string;
  label: string;
}

export interface OrionTableRow {
  [key: string]: any; // Peut être remplacé par un typage plus strict si les données sont connues
}

export interface OrionTableAction {
  label: string;
  handler: (row: OrionTableRow) => void;
}

export interface OrionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}
