import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const UploadReports = () => {
  const { t } = useTranslation();
  const onDrop = useCallback((acceptedFiles) => {
    // Mock upload
    console.log('Files uploaded:', acceptedFiles);
    alert(t('filesUploaded'));
  }, [t]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold">{t('uploadReports')}</h2>
          <p className="text-sm text-slate-600">{t('uploadDescription')}</p>
        </div>
      </div>

      <div {...getRootProps()} className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center transition hover:border-slate-300 hover:bg-slate-100 cursor-pointer">
        <input {...getInputProps()} />
        <Upload className="mx-auto mb-4 text-slate-600" size={48} />
        {isDragActive ? (
          <p className="text-slate-700">{t('dropFiles')}</p>
        ) : (
          <p className="text-slate-700">{t('dragDropFiles')}</p>
        )}
      </div>
    </div>
  );
};

export default UploadReports;
