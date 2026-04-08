"use client";

interface DeleteStaffModalProps {
  onCancel: () => void;
  onConfirm: () => void;
}

export function DeleteStaffModal({ onCancel, onConfirm }: DeleteStaffModalProps) {
  return (
    <div className="fixed inset-0 lg:left-[340px] z-[100] flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-2xl">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-slate-800">Delete Staff Entry</h3>
          <p className="mt-2 text-sm text-slate-500">
            Are you sure you want to remove this staff configuration? This action cannot be undone.
          </p>
        </div>
        <div className="flex items-center justify-start gap-3 bg-slate-50 px-6 py-4 border-t border-slate-100">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:bg-slate-50 cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-600 active:scale-95 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
