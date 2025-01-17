export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentLengtValid = this.validateContentLength(content);

    if (!isContentLengtValid) {
      throw new Error('Content lrngth error.');
    }

    this.content = content;
  }
}
