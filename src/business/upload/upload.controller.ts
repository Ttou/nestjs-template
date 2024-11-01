import { Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common'
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express'
import { ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger'

import { UploadFileDto, UploadFilesDto } from './upload.dto.js'
import { UploadService } from './upload.service.js'

@ApiTags('上传接口')
@Controller()
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @ApiOperation({ summary: '上传单文件' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ description: '单文件', type: UploadFileDto })
  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  public async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file)
  }

  @ApiOperation({ summary: '上传多文件' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ description: '多文件', type: UploadFilesDto })
  @Post('files')
  @UseInterceptors(FilesInterceptor('files'))
  public async uploadFiles(@UploadedFiles() files: Express.Multer.File[]) {
    console.log(files)
  }
}
