import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

const UploadReports = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Mock upload
    console.log('Files uploaded:', acceptedFiles);
    alert('Files uploaded successfully!');
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Upload Reports</h2>
      <div {...getRootProps()} className="border-2 border-dashed border-gray-300 p-8 text-center cursor-pointer hover:border-gray-400">
        <input {...getInputProps()} />
        <Upload className="mx-auto mb-4" size={48} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  );
};

export default UploadReports;