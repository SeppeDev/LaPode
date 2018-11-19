export class Image {
  title: string;
  description: string;
  file: File;
}

interface File {
  url: string;
  details: FileDetails;
  contentType: string;
  fileName: string;
  title: string;
}

interface FileDetails {
  image: ImageDetails;
  size: number;
}

interface ImageDetails {
  width: number;
  height: number;
}
