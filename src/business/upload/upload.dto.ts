import { ApiProperty } from '@nestjs/swagger'

export class UploadFileDto {
  @ApiProperty({ description: '单文件', type: 'string', format: 'binary' })
  file: any
}

export class UploadFilesDto {
  @ApiProperty({ description: '多文件', type: 'array', items: { type: 'string', format: 'binary' } })
  files: any[]
}
